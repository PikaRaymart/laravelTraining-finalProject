<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

use function App\Helpers\jsonResponse;

class AdminMiddleware{
	/**
	 * Handle an incoming request.
	 *
	 * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
	 */
	public function handle(Request $request, Closure $next): Response{
    $user = $request->user();

    if ($user && $user->tokenCan("admin")) {
      return $next($request);
    }
		
		return jsonResponse(["message" => "Unauthorized access."], 401);
	}
}
