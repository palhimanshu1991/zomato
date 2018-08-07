<?php

namespace App\Http\Controllers;

use App\Address;
use App\Http\Requests\Restaurants\CreateRestaurantRequest;
use Illuminate\Http\Request;
use App\Restaurant;
use App\Tasks\CreateImageTask;

class RestaurantsController extends Controller
{

    /**
     * @var RestauarntTransformer
     */
    private $restauarntTransformer;


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $restaurants = Restaurant::all()->load('address', 'address.district', 'address.district.state', 'categories', 'cuisines', 'reviews', 'images');


        return $restaurants->transform(function ($item) {

            //dd($item->categories);
            return $this->transformToArray($item);
        });


    }


    public function store(CreateRestaurantRequest $request)
    {
        \Log::info($request->all());
        $address = Address::create([
            'street' => $request->address['street'],
            'locality' => $request->address['locality'],
            'landmark' => $request->address['landmark'],
            'pincode' => $request->address['pincode'],
            'state_id' => $request->address['state_id'],
            'district_id' => $request->address['district_id']
        ]);

        $restaurant = Restaurant::create([
            'name' => $request->name,
            'address_id' => $address->id,
        ]);

        $restaurant->categories()->attach($request->category_id);

        $restaurant->cuisines()->attach($request->cuisine_id);


        return $this->transformToArray($restaurant);
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $restaurant = Restaurant::find($id)->load('address', 'categories', 'cuisines', 'reviews', 'images');
        return $this->transformToArray($restaurant);

    }

    private function getImages($item)
    {
        $image = $item->images->first();

        return isset($image) ? storage_path('app/') . $image->path : 'https://media.istockphoto.com/photos/tapas-food-picture-id603267744?k=6&m=603267744&s=612x612&w=0&h=-gkuUeHYUaBvFN1RLCI4gMWih1qJgsKi2jhUHoQKmWs=';
    }


    private function transformToArray($item)
    {

        $values = [
            'id' => $item->id,
            'name' => $item->name,
            'street' => $item->address->street,
            'locality' => $item->address->locality,
            'landmark' => $item->address->landmark,
            'pincode' => $item->address->pincode,
            'district' => $item->address->district->name,
            'state' => $item->address->state->name,
            'category' => $item->categories[0]->name,
            'cuisine' => $item->cuisines[0]->name,
            'image' => $this->getImages($item)
        ];

        return $values;
    }


}
