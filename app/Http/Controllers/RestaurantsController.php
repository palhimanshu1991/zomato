<?php

namespace App\Http\Controllers;

use App\Address;
use App\Http\Requests\Restaurants\CreateRestaurantRequest;
use Illuminate\Http\Request;
use App\Restaurant;

class RestaurantsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Restaurant::all();

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateRestaurantRequest $request)
    {
        $address = Address::create([
            'street' => $request->street,
            'locality' => $request->locality,
            'landmark' => $request->landmark,
            'pincode' => $request->pincode,
            'state_id' => $request->state_id,
            'district_id' => $request->district_id
        ]);

        $restaurant = Restaurant::create([
            'name' => $request->name,
            'address_id' => $address->id,
            'category_id' => $request->category_id
        ]);

        $restaurant->categories()->attach($request->category_id);

        return $restaurant;
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $restaurant = Restaurant::find($id);

        return $restaurant->load('address', 'categories', 'cuisines', 'reviews');
    }


}
