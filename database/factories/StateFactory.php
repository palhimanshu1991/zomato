<?php

use Faker\Generator as Faker;

$factory->define(App\State::class, function (Faker $faker) {
    return [
        'name' => $faker->city,
        //'remember_token' => str_random(10),
    ];
});
