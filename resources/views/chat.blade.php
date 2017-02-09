@extends('layouts.app')

@section('content')
    <div id="app" class="container">
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                        Chat Room
                        <span class="badge pull-right">@{{ usersInRoom.length }}<span>
                        </div>

                        <div class="panel-body" style="padding: 0;">
                            <chat-log v-bind:messages="messages"></chat-log>
                            <chat-composer v-on:messagesent="addMessage"></chat-composer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
    </div>
@endsection
