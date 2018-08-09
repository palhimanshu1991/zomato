<?php

namespace App\Http\Controllers;

use App\Address;
use App\Http\Requests\Restaurants\CreateRestaurantRequest;
use Illuminate\Http\Request;
use App\Restaurant;
use App\Tasks\CreateImageTask;
use App\Http\Transformers\RestaurantTransformer;

class RestaurantsController extends Controller
{
    protected $transformer;

    /**
     * @var RestauarntTransformer
     */

    public function __construct(RestaurantTransformer $transformer)
    {
        $this->transformer = $transformer;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $restaurants = Restaurant::all()->load('address', 'address.district', 'address.district.state', 'categories', 'cuisines', 'reviews', 'images');

        return $this->transformer->transformLoop($restaurants);


    }


    public function store(CreateRestaurantRequest $request)
    {
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


        return $this->transformer->transformToArray($restaurant);
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
        return $this->transformer->transformToArray($restaurant);

    }

    public function update(Request $request, $id)
    {

        $restaurant = Restaurant::find($id);
        $address = $restaurant->address()->update([
            'street' => $request->address['street'],
            'locality' => $request->address['locality'],
            'landmark' => $request->address['landmark'],
            'pincode' => $request->address['pincode'],
            'state_id' => $request->address['state_id'],
            'district_id' => $request->address['district_id']
        ]);


        $category = $restaurant->categories()->sync([$request->category_id]);

        $cuisine = $restaurant->cuisines()->sync([$request->cuisine_id]);


        $restaurant
            ->update([
                'name' => $request->name
            ]);

        return $this->transformer->transformToArray($restaurant);
    }

    public function destroy($id)
    {

        $restaurant = Restaurant::find($id);
        if ($restaurant) {
            $restaurant->categories()->detach();
            $restaurant->cuisines()->detach();
            $restaurant->reviews()->delete();
            $restaurant->images()->delete();

            $restaurant->delete();
            $restaurant->address()->delete();
            return $restaurant;
        } else {
            return "already deleted";
        }

    }

}