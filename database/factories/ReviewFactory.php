<?php

use Faker\Generator as Faker;

$factory->define(App\Review::class, function (Faker $faker) {
    return [
        'rating' => rand(1, 5),
        'text' => $faker->text,
        'user_id' =>function() {
         return factory(App\User::class)->create()->id;
        },
        'restaurant_id' =>function() {
            return factory(App\Restaurant::class)->create()->id;
        }
    ];
});
