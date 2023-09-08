extends Node


signal  connected

var socket = WebSocketPeer.new()
func _ready():
	call_deferred("conn")
func conn():
	socket.connect_to_url("ws://127.0.0.1:3000")
	emit_signal("connected")
	
func  _process(delta):
	socket.poll()
	if socket.get_ready_state() == WebSocketPeer.STATE_CLOSED:	
		if socket.get_close_code() == -1:
			print("ok")
	var state = socket.get_ready_state()
	if state == WebSocketPeer.STATE_OPEN:
		while socket.get_available_packet_count():
			var packet =socket.get_packet()
			print("Packet: ", str(packet.get_string_from_utf8()))
		
	
	elif state == WebSocketPeer.STATE_CLOSING:
		# Keep polling to achieve proper close.
		pass
	elif state == WebSocketPeer.STATE_CLOSED:
		var code = socket.get_close_code()
		var reason = socket.get_close_reason()
		print("WebSocket closed with code: %d, reason %s. Clean: %s" % [code, reason, code != -1])
		set_process(false) # Stop processing.

func callBack():
	var json_string = JSON.stringify("PING")
	
	socket.put_packet(json_string.to_ascii_buffer())
	
