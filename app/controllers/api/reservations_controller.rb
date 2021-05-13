class Api::ReservationsController < ApplicationController

    def index
        @reservations = Reservation.where(:player_id: current_player.id)
    end

    def show
        @reservation = Reservation.find(params[:id])
    end

    def create
        @reservation.create!(reservation_params)
        render :show
    end

    def update
        @reservation = Reservation.find(params[:id])

        if @reservation.player_id === current_player.id
            if @reservation.update(reservation_params)
                render :show
            else
                render @reservation.errors.full_messages, status: 422
            end
        end

    end

    def destroy 
        @reservation = Reservation.find(params[:id])

        if @reservation.player_id === current_player.id
            if @reservation.destroy
                render 'api/players/show'
            else
                render json: ["Can't destroy"]
            end
        end
    end

    private

    def reservation_params
        params.require(:reservation)
            .permit(
                :game_date,
                :game_start,
                :players_num,
                :dnd_campaign_id,
                :game_places_id,
                :player_id
                )
end