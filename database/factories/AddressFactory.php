<?php

use Faker\Generator as Faker;

$factory->define(App\Address::class, function (Faker $faker) {
    return [
        'street' => $faker->streetName,
        'locality' => $faker->streetName,
        'landmark' =>$faker->streetName,
        'pincode' => $faker->randomNumber(6),
        'state_id' => 3,
        'district_id' => 4,

    ];
});
