<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;

class LoginController extends Controller
{
    //
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'email' => 'required|string',
            'password' => 'required|string'
        ]);

        if($validator->fails()){
            return response()->json(['status' => false, 'message' => 'fix errors', 'errors' => $validator->errors()], 500);
        }

        
        $credentials = $request->only('email', 'password');
        
        if(auth()->attempt($credentials, $request->filled('remember'))) {
            $user = User::where('email', $request->input('email'))->first();
            $token = $user->createToken('auth-token')->plainTextToken;
            return response()->json(['status' => true, 'user' => auth()->user(), 'auth-token' => $token]);
        }

        return response()->json(['status' => false, 'message' => 'invalid username or password'], 500);
    }

    public function logout(Request $request)
    {
        $user = auth()->user();
        $user->tokens->each->delete();
        auth('web')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return response()->json(['status' => true, 'message' => 'logged out']);
    }

    public function me()
    {
        return response()->json(['status' => true, 'user' => auth()->user()]);
    }
}
