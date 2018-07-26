<?php

use Faker\Generator as Faker;

$factory->define(App\District::class, function (Faker $faker) {
    return [
        'state_id' => 1,
        'name' => $faker->city,

    ];
});
