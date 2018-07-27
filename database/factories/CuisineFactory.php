<?php

use Faker\Generator as Faker;

$factory->define(App\Cuisine::class, function (Faker $faker) {
    return [
        'name'=> $faker->firstName
    ];
});
