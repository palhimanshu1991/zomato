<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Restaurant;

class Category extends Model
{

    protected $fillable = [
        'name',
    ];


    protected $hidden = [

    ];

    public function restaurants()
    {
        return $this->belongsToMany(Restaurant::class);
    }
}
