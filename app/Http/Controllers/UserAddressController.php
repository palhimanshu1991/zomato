<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateUserAddressRequest;
use App\UserAddress;
use Illuminate\Http\Request;
use App\Address;

class UserAddressController extends Controller
{


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateUserAddressRequest $request)
    {
        $address = Address::updateOrCreate([
            'street' => $request->street,
            'locality' => $request->locality,
            'landmark' => $request->landmark,
            'pincode' => $request->pincode,
            'state_id' => $request->state_id,
            'district_id' => $request->district_id
        ]);

        $userAddress = UserAddress::updateOrCreate([
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
       return  $userAddress = UserAddress::find($id);
    }



    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $userAddress = UserAddress::find($id);
        $userAddress->delete;
        return response()->json(["message"=>"Success","success"=>200]);
    }
}
