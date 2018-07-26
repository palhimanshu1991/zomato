<?php

use Faker\Generator as Faker;

$factory->define(App\Restaurant::class, function (Faker $faker) {
    return [
        'name'=>$faker->company,
        'locality'=>$faker->streetName,
        'landmark'=>$faker->streetName,
        'pincode'=>$faker->randomDigit(6),
    ];
});
