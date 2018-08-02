<?php

namespace App\Http\Controllers;

use App\Address;
use App\Http\Requests\Restaurants\CreateRestaurantRequest;
use Illuminate\Http\Request;
use App\Restaurant;

class RestaurantsController extends Controller
{

    /**
     * @var RestauarntTransformer
     */
    private $restauarntTransformer;

//    public function __construct(RestauarntTransformer $restauarntTransformer)
//    {
//        $this->restauarntTransformer = $restauarntTransformer;
//    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $restaurants = Restaurant::all()->load('address', 'address.district', 'address.district.state', 'categories', 'cuisines', 'reviews', 'images');

    foreach ($restaurants as $restaurant) {
        $restaurant->transform(function ($res) {
            //dd($res->categories);
            $values = [
                'name' => $res->name,
                'street' => $res->address->street,
                'locality' => $res->address->locality,
                'landmark' => $res->address->landmark,
                'pincode' => $res->address->pincode,
                'district' => $res->address->district->name,
                'state' => $res->address->district->state->name
//                'category' => $res->categories[0]->name,
//                'cuisine' => $res->cuisines[0]->name
            ];
            dd($values);
        });
    }


       // return $restaurants;
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

        return $restaurant->load('address', 'categories', 'cuisines', 'reviews', 'images');
    }


}
