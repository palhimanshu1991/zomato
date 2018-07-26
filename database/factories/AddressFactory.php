<?php

use Faker\Generator as Faker;

$factory->define(App\Address::class, function (Faker $faker) {
    return [
        'street' => $faker->name,
        'locality' => $faker->name,
        'landmark' =>$faker->name,
        'pincode' => $faker->randomNumber(6),
        'state_id' => 3,
        'district_id' => 4,

    ];
});
