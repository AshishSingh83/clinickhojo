
BITS 16
%INCLUDE "mikedev.inc"
ORG 32768

start:
	call intro
game_loop:
	xor ax, ax
	cmp byte[is_game_active], al
	je conclude_game

	call os_clear_screen
	call set_background
	call write_screen
key_buffer:
	call os_wait_for_key
	sub al, 30h
	
	xor bx, bx
	mov bL, byte[current_scene]

	cmp al, 1
	jl key_buffer
	cmp al, 4
	ja key_buffer
	je incorrect_option
	cmp al, [ans + bx]
	je correct_option
	jmp incorrect_option
	
correct_option:
	mov al, byte [current_scene]
	cmp al, 4
	jae incorrect_option
	inc byte[current_scene]
	jmp game_loop
RET
incorrect_option:
	call game_over
jmp game_loop
ret

game_over:
	call os_clear_screen
	call set_background

	mov dh, 03
	mov dl, 16
	call os_move_cursor
	mov si, .boundary
	call os_print_string

	mov dh, 04
	mov dl, 35
	call os_move_cursor
	mov si, .title
	call os_print_string

	mov dh, 05
	mov dl, 16
	call os_move_cursor
	mov si, .boundary
	call os_print_string

	mov dh, 08
	mov dl, 28
	call os_move_cursor
	mov bl, 04
	cmp byte[current_scene], bl
	je .winner_text
	mov si, .line1
	jmp .print_status_text

	.winner_text:
	xor ax, ax
	mov byte[current_scene], al
	mov si, .line2
	.print_status_text:
	call os_print_string

	mov dh, 14
	mov dl, 25
	call os_move_cursor
	mov si, .space_
	call os_print_string

	mov dh, 16
	mov dl, 25
	call os_move_cursor
	mov si, .esc_
	call os_print_string
	
	.check_key:
	call os_wait_for_key
	cmp al, 20h
	je game_loop
	cmp al, 1bh
	je .endgame
	
	jmp .check_key
.title      db 'Game Over', 0
.boundary	db '============================================',0
.line1      db 'You Pressed Wrong Option...', 0
.line2      db 'Congratulations... You Win', 0
.esc_   	db 'Press Esc     -> Quit', 0
.space_     db 'Press Space   -> Retry', 0
.endgame:
	xor ax, ax
	mov byte[is_game_active], al
	jmp game_loop
ret

write_screen:
xor ax, ax
cmp byte [current_scene], al
je .state00
inc al
cmp byte [current_scene], al	
je .state01
inc al
cmp byte [current_scene], al
je .state02
inc al
cmp byte [current_scene], al	
je .state03
inc al
cmp byte [current_scene], al	
je .state04

.state00:
	mov ax, .line0_1
	mov word[.line01], ax
	mov ax, .line0_2
	mov word[.line02], ax
	mov ax, .line0_3
	mov word[.line03], ax

	mov ax, .op_01
	mov word[.op01], ax
	mov ax, .op_02
	mov word[.op02], ax
	mov ax, .op_03
	mov word[.op03], ax
	mov ax, .op_04
	mov word[.op04], ax
jmp .continue_write
.state01:
	mov ax, .line1_1
	mov word[.line01], ax
	mov ax, .line1_2
	mov word[.line02], ax
	mov ax, .line1_3
	mov word[.line03], ax

	mov ax, .op_11
	mov word[.op01], ax
	mov ax, .op_12
	mov word[.op02], ax
	mov ax, .op_13
	mov word[.op03], ax
	mov ax, .op_14
	mov word[.op04], ax
jmp .continue_write
.state02:
	mov ax, .line2_1
	mov word[.line01], ax
	mov ax, .line2_2
	mov word[.line02], ax
	mov ax, .line2_3
	mov word[.line03], ax

	mov ax, .op_21
	mov word[.op01], ax
	mov ax, .op_22
	mov word[.op02], ax
	mov ax, .op_23
	mov word[.op03], ax
	mov ax, .op_24
	mov word[.op04], ax
jmp .continue_write
.state03:
	mov ax, .line3_1
	mov word[.line01], ax
	mov ax, .line3_2
	mov word[.line02], ax
	mov ax, .line3_3
	mov word[.line03], ax

	mov ax, .op_31
	mov word[.op01], ax
	mov ax, .op_32
	mov word[.op02], ax
	mov ax, .op_33
	mov word[.op03], ax
	mov ax, .op_34
	mov word[.op04], ax
jmp .continue_write

.state04:
	mov ax, .line4_1
	mov word[.line01], ax
	mov ax, .line4_2
	mov word[.line02], ax
	mov ax, .line4_3
	mov word[.line03], ax

	mov ax, .op_41
	mov word[.op01], ax
	mov ax, .op_42
	mov word[.op02], ax
	mov ax, .op_43
	mov word[.op03], ax
	mov ax, .op_44
	mov word[.op04], ax
jmp .continue_write

.continue_write:
	mov dh, 09
	mov dl, 16
	call os_move_cursor
	mov si, .boundary
	call os_print_string

	mov dh, 10
	mov dl, 30
	call os_move_cursor
	mov si, .option
	call os_print_string

	mov dh, 11
	mov dl, 16
	call os_move_cursor
	mov si, .boundary
	call os_print_string

	mov dh, 03
	mov dl, 14
	call os_move_cursor
	mov si, word[.line01]
	call os_print_string

	mov dh, 04
	mov dl, 16
	call os_move_cursor
	mov si, word[.line02]
	call os_print_string

	mov dh, 05
	mov dl, 16
	call os_move_cursor
	mov si, word[.line03]
	call os_print_string

	mov dh, 14
	mov dl, 15
	call os_move_cursor
	mov si, word[.op01]
	call os_print_string

	mov dh, 16
	mov dl, 15
	call os_move_cursor
	mov si, word[.op02]
	call os_print_string

	mov dh, 14
	mov dl, 50
	call os_move_cursor
	mov si, word[.op03]
	call os_print_string

	mov dh, 16
	mov dl, 50
	call os_move_cursor
	mov si, word[.op04]
	call os_print_string
jmp .exit_

.boundary	db '============================================',0
.option 	db 'Select an Option',0

.line01:		dw 00
.line02:		dw 00
.line03:		dw 00
.op01:			dw 00
.op02:			dw 00
.op03:			dw 00
.op04:			dw 00
;------------------------------------
.line0_1:		db '1-        I am taken from a mine, and shut up in a ',0
.line0_2:		db 'wooden case, from which I am never released,',0
.line0_3:		db ' and yet I am used by almost every place. What am I?', 0
.op_01:			db '1. Coal',0
.op_02:			db '2. Pencil',0
.op_03:			db '3. Diamond',0
.op_04:			db '4. Gold',0
;------------------------------------
.line1_1:		db '2-           I am always hungry, ',0
.line1_2:		db 'I must always be fed. The finger I ',0
.line1_3:		db 'touch will soon turn red. What am I?', 0
.op_11:			db '1. Water',0
.op_12:			db '2. Wind',0
.op_13:			db '3. Fire',0
.op_14:			db '4. Earth',0
;------------------------------------
.line2_1:		db '3-           The more you take, the more you ',0
.line2_2:		db 'leave behind. What am I?',0
.line2_3:		db '', 0
.op_21:			db '1. Footsteps',0
.op_22:			db '2. Time',0
.op_23:			db '3. Money',0
.op_24:			db '4. Memories',0
;------------------------------------
.line3_1:		db '4-         I speak without a mouth and hear',0
.line3_2:		db 'without ears. I have no body,',0
.line3_3:		db ' but I come alive with wind. What am I?', 0
.op_31:			db '1. Echo',0
.op_32:			db '2. Whisper',0
.op_33:			db '3. Shadow',0
.op_34:			db '4. Music',0
;------------------------------------
.line4_1:		db '5-         I am not alive, but I grow.',0
.line4_2:		db 'I don not have lungs, but I need air.',0
.line4_3:		db '	 What am I?', 0
.op_41:			db '1. Water',0
.op_42:			db '2. Plant',0
.op_43:			db '3. Animal',0
.op_44:			db '4. Fire',0

.exit_:
ret

set_background:
	mov ax, .title_msg
	mov bx, .footer_msg
	
	mov cx, 01100000b
	call os_draw_background

	jmp .exit_

.title_msg		DB 'Murder Mystry ',0
.footer_msg		DB 'Select one of the option', 0
.exit_:
ret

intro:
	mov ax, .string1
	mov bx, .string2
	mov cx, .string3
	mov dx, 0
	call os_dialog_box

	cmp ax, 1
	je .ok
.ok:
	jmp game_loop

	.string1	db '   Solve the riddles or', 0
	.string2	db '  you will get killed by', 0
	.string3	db 'phantom pshyco killer Alakazam', 0

ret
conclude_game:
;---restore ES----
    mov ax, 0x2000
    mov es, ax
    call os_clear_screen
    call os_show_cursor
ret
;-----------------------------------------------
current_scene:	 	db 	00
is_game_active: 	db 	01
ans:				db 	02, 03, 01, 01, 04