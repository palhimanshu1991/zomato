<?php

use Illuminate\Database\Seeder;

class CreateCuisineTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Cuisine::class,20)->create();
    }
}
