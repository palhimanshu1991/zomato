<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Restaurant;

class Cuisine extends Model
{

    public function restaurants()
    {
        return $this->belongsToMany(Restaurant::class);
    }
}
