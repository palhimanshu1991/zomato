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


        return $restaurants->transform(function ($item) {

            //dd($item->categories);
            return [
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
        });


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

    private function getImages($item)
    {
        $image = $item->images->first();

        return isset($image) ? "/Users/instaveritas/Code/zomato/storage/app/".$image->path : 'https://media.istockphoto.com/photos/tapas-food-picture-id603267744?k=6&m=603267744&s=612x612&w=0&h=-gkuUeHYUaBvFN1RLCI4gMWih1qJgsKi2jhUHoQKmWs=';
    }


}
