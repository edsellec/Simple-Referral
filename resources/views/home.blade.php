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
                <div class="card-header"><strong>Referral Link:</strong>
                <input type="text" size="40" value="<?php echo $hc->referral_url(); ?>" id="myInput" readonly>
                <button onclick="myFunction()">Copy link</button>
                <script>
                function myFunction() {
                /* Get the text field */
                var copyText = document.getElementById("myInput");

                /* Select the text field */
                copyText.select();
                copyText.setSelectionRange(0, 99999); /*For mobile devices*/

                /* Copy the text inside the text field */
                document.execCommand("copy");

                /* Alert the copied text */
                alert("Copied the text: " + copyText.value);
                }
                </script>
                </div>
                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                    <div id="referrer_table"></div>
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
