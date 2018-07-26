<?php

use Faker\Generator as Faker;

$factory->define(App\Review::class, function (Faker $faker) {
    return [
        'rating' => rand(1, 5),
        'text' => $faker->text,
        'user_id' => 1,
        'restaurant_id' => 1


    ];
});
