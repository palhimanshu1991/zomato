<?php
/**
 * Created by PhpStorm.
 * User: instaveritas
 * Date: 02/08/18
 * Time: 11:55 AM
 */

namespace App\Http\Transformers;

use App\Address;
use App\Http\Requests\Restaurants\CreateRestaurantRequest;
use Illuminate\Http\Request;
use App\Restaurant;
use App\Tasks\CreateImageTask;

class RestaurantTransformer
{

    protected $instance;

    public function __construct()
    {

    }

    public function transformLoop($instance)
    {

        return $instance->transform(function ($item) {

            return $this->transformToArray($item);
        });
    }

    public function transformToArray($item)
    {
        $values = [
            'id' => $item->id,
            'name' => $item->name,
            'category_id' => $item->categories[0]->id,
            'cuisine_id' => $item->cuisines[0]->id,
            'category' => $item->categories[0]->name,
            'cuisine' => $item->cuisines[0]->name,
            'image' => $this->getImages($item),
            'address' => [
                'street' => $item->address->street,
                'locality' => $item->address->locality,
                'landmark' => $item->address->landmark,
                'pincode' => $item->address->pincode,
                'district' => $item->address->district->name,
                'state' => $item->address->state->name,
                'state_id' => $item->address->state->id,
                'district_id' => $item->address->district->id

            ]

        ];

        return $values;
    }

    public function getImages($item)
    {
        $image = $item->images->first();

        return isset($image) ? storage_path('app/') . $image->path : 'https://media.istockphoto.com/photos/tapas-food-picture-id603267744?k=6&m=603267744&s=612x612&w=0&h=-gkuUeHYUaBvFN1RLCI4gMWih1qJgsKi2jhUHoQKmWs=';

    }


}