<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateUserAddressRequest;
use App\UserAddress;
use Illuminate\Http\Request;
use App\Address;

class UserAddressController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateUserAddressRequest $request)
    {
        $address = Address::create([
            'street' => $request->street,
            'locality' => $request->locality,
            'landmark' => $request->landmark,
            'pincode' => $request->pincode,
            'state_id' => $request->state_id,
            'district_id' => $request->district_id
        ]);

        $userAddress = UserAddress::create([
            'title' => $request->title,
            'user_id' => auth()->user()->id,
            'address_id' => $address->id
        ]);

        return response()->json(["success"=>200,"message"=>"Created"]);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
