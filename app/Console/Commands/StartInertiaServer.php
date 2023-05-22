<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Symfony\Component\Process\Process;

class StartInertiaServer extends Command{

	protected $signature = 'inertia:serve';
	protected $description = 'Command description';

  function handle(){
    $this->startConcurrentServers();
  }

  protected function startConcurrentServers(){
    $this->info('Starting Inertia.js SSR server, Laravel server, and npm dev concurrently...');

    $laravelServeProcess = new Process(['php', 'artisan', 'serve']);
    $laravelServeProcess->setTimeout(null); // Set no timeout for the process
    $laravelServeProcess->start();

    $npmDevProcess = new Process(['npm', 'run', 'dev']);
    $npmDevProcess->setTimeout(null); // Set no timeout for the process
    $npmDevProcess->start();

    $inertiaSsrProcess = new Process(['php', 'artisan', 'inertia:start-ssr']);
    $inertiaSsrProcess->setTimeout(null); // Set no timeout for the process
    $inertiaSsrProcess->start();

    $inertiaSsrProcess->wait();
  }
}
