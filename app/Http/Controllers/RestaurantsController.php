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
