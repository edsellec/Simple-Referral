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
                    <?php
                    echo "<div className='container'>";
                    echo "<div className='row justify-content-center'>";
                    echo "<div className='col-md-8'>";
                    echo "<div className='card'>";
                    echo "<div className='card-header'>Referrals</div>";
                    echo "<div className='card-body'><table border = '1' responsive>";
                    echo "<tr> <td>Id</td> <td>Name</td> <td>Email</td> </tr>";
                    foreach($hc->referrals() as $key) {
                        echo "<tr> <td>"; echo $key->id; echo "</td>";
                        echo "<td>"; echo $key->name; echo "</td>";
                        echo "<td>"; echo $key->email; echo "</td> </tr>";
                    }
                    echo "</table>";
                    echo "</div>";
                    echo "</div>";
                    echo "</div>";
                    echo "</div>";
                    echo "</div>";
                    ?>
                    <div id="datatable"></div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
