<?php

use Faker\Generator as Faker;

$factory->define(App\UserAddress::class, function (Faker $faker) {
    return [
        'title' => $faker->firstName,
        'user_id' =>function() {
            return factory(App\User::class)->create()->id;
        },
        'address_id' => function() {
            return factory(App\Address::class)->create()->id;
        }
    ];
});
