<?php

use Faker\Generator as Faker;

$factory->define(App\Restaurant::class, function (Faker $faker) {
    return [
        'name'=>$faker->company,
        'address_id' =>1,
        'category_id' =>1
    ];
});
