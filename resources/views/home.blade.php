@extends('layouts.app')

@section('content')
<?php
    use App\Http\Controllers\HomeController;
    $hc = new HomeController;
?>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                    Referral Link:
                    <?php
                        echo $hc->referral_url();
                    ?>
                    <div id="like_button_container"></div>
                </div>
                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                    Referrer
                    <?php
                        $key = $hc->referrer();
                        echo $key;
                    ?>
                </div>
                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                    <div id="referral_table"></div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
