<?php

use Faker\Generator as Faker;

$factory->define(App\Review::class, function (Faker $faker) {
    return [
        'rating' => random_int(1, 5),
        'text' => $faker->text,
        'user_id' => function () {
            return factory(App\User::class)->create()->id;
        },
        'restaurant_id' => function () {
            return factory(App\Restaurant::class)->create()->id;
        }
    ];
});

$factory->define(App\Comment::class, function (Faker $faker) {
    return [
        'text' => $faker->text,
        'user_id' => function () {
            return factory(App\User::class)->create()->id;
        },
        'commentable_id' => '',
        'commentable_type' => '',
    ];
});


$factory->define(App\Like::class, function (Faker $faker) {
    return [
        'user_id' => function () {
            return factory(App\User::class)->create()->id;
        },
        'likeable_id' => '',
        'likeable_type' => '',
    ];
});



$factory->afterCreating(App\Review::class, function (App\Review $review, $faker) {

    $review->likes()->save(factory(App\Like::class)->make());

    $review->comments()->save(factory(App\Comment::class)->make());

});