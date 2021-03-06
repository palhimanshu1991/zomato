<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            StatesTableSeeder::class,
            DistrictsTableSeeder::class,
            AddressesTableSeeder::class,
            CategoriesTableSeeder::class,
            UserTableSeeder::class,
            RestaurantTableSeeder::class,
            ReviewTableSeeder::class,
            CreateCuisineTableSeeder::class,
            UserAddressTableSeeder::class
        ]);
    }
}
