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
         $this->call([StatesTableSeeder::class, DistrictsTableSeeder::class, AddressesTableSeeder::class, CategoriesTableSeeder::class]);
        //$this->call([UsersTableSeeder::class, ProductsTableSeeder::class]);
    }
}
