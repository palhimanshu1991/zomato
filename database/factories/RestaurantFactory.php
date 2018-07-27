<?php

use Faker\Generator as Faker;

$factory->define(App\Restaurant::class, function (Faker $faker) {
    return [
        'name' => $faker->company,
        'address_id' => function () {
            return factory(App\Address::class)->create()->id;
        },
    ];
});


$factory->afterCreating(App\Restaurant::class, function (App\Restaurant $restaurant, $faker) {

    $restaurant->categories()->save(factory(App\Category::class)->make());

    $restaurant->cuisines()->save(factory(App\Cuisine::class)->make());

});