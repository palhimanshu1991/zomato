<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{

    protected $fillable = [
        'street', 'locality', 'landmark', 'pincode', 'state_id', 'district_id',
    ];


    protected $hidden = [

    ];

    public function state(){
        return $this->belongsTo('App\Comment');
    }

    public function district(){
        return $this->belongsTo('App\District');
    }


}
