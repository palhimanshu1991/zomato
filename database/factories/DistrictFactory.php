<?php

use Faker\Generator as Faker;

$factory->define(App\District::class, function (Faker $faker) {
    return [
        'state_id' => function () {
            return factory(App\State::class)->create()->id;
        },
        'name' => $faker->city,
    ];
});
