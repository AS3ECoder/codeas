/***********************************************************************/
/***************��������Э�鹤���Զ����ɣ������ֶ��޸�****************/
/************************ Э��汾��:#�������ƣ�ע�� ******************************/
/***********************************************************************/





//package cow.net.structs
//{	
	//import sys.utils.Stream;	
	
class Protocols {
	/*��Ч����*/
	public static  MSG_NULL_ACTION :number = 0;	//null_action
	/*��������״̬*/
	public static  MSG_PING_PONG :number = 1;	//ping_pong
	/*�ߵ����ߵ�׼��ǿ�Ƶ�½*/
	public static  CMSG_FORCED_INTO :number = 2;	//forced_into
	/*���Session����*/
	public static  CMSG_GET_SESSION :number = 3;	//get_session
	/*���ط����ݰ�·�ɲ���*/
	public static  MSG_ROUTE_TRACE :number = 4;	//route_trace
	/*��¼�ͻ�����־*/
	public static  CMSG_WRITE_CLIENT_LOG :number = 5;	//write_client_log
	/*����ʧ��*/
	public static  SMSG_OPERATION_FAILED :number = 6;	//operation_failed
	/*ͬ��ʱ��*/
	public static  MSG_SYNC_MSTIME :number = 7;	//sync_mstime
	/*�������*/
	public static  SMSG_UD_OBJECT :number = 8;	//ud_object
	/*������¿���Э��*/
	public static  CMSG_UD_CONTROL :number = 9;	//ud_control
	/*������¿���Э����*/
	public static  SMSG_UD_CONTROL_RESULT :number = 10;	//ud_control_result
	/*GRID�Ķ������*/
	public static  SMSG_GRID_UD_OBJECT :number = 11;	//grid_ud_object
	/*GRID�Ķ������*/
	public static  SMSG_GRID_UD_OBJECT_2 :number = 12;	//grid_ud_object_2
	/*���߿ͻ��ˣ�Ŀǰ�Լ����ڵ�¼���еĵڼ�λ*/
	public static  SMSG_LOGIN_QUEUE_INDEX :number = 13;	//login_queue_index
	/*����ԭ��*/
	public static  SMSG_KICKING_TYPE :number = 14;	//kicking_type
	/*��ȡ��ɫ�б�*/
	public static  CMSG_GET_CHARS_LIST :number = 15;	//get_chars_list
	/*��ɫ�б�*/
	public static  SMSG_CHARS_LIST :number = 16;	//chars_list
	/*��������Ƿ����ʹ��*/
	public static  CMSG_CHECK_NAME :number = 17;	//check_name
	/*������ֽ��*/
	public static  SMSG_CHECK_NAME_RESULT :number = 18;	//check_name_result
	/*������ɫ*/
	public static  CMSG_CHAR_CREATE :number = 19;	//char_create
	/*��ɫ�������*/
	public static  SMSG_CHAR_CREATE_RESULT :number = 20;	//char_create_result
	/*ɾ����ɫ*/
	public static  CMSG_DELETE_CHAR :number = 21;	//delete_char
	/*��ɫɾ�����*/
	public static  SMSG_DELETE_CHAR_RESULT :number = 22;	//delete_char_result
	/*��ҵ�¼*/
	public static  CMSG_PLAYER_LOGIN :number = 23;	//player_login
	/*����˳�*/
	public static  CMSG_PLAYER_LOGOUT :number = 24;	//player_logout
	/*��ʱ�˺�ת����*/
	public static  CMSG_REGULARISE_ACCOUNT :number = 25;	//regularise_account
	/*��ɫ������Ϣ*/
	public static  CMSG_CHAR_REMOTESTORE :number = 26;	//char_remotestore
	/*��ɫ������Ϣ*/
	public static  CMSG_CHAR_REMOTESTORE_STR :number = 27;	//char_remotestore_str
	/*���ͣ������C->S��mapid��������ɴ��͵�ID*/
	public static  CMSG_TELEPORT :number = 28;	//teleport
	/*ֹͣ�ƶ�*/
	public static  MSG_MOVE_STOP :number = 29;	//move_stop
	/*unit�����ƶ�*/
	public static  MSG_UNIT_MOVE :number = 30;	//unit_move
	/*ʹ����Ϸ����*/
	public static  CMSG_USE_GAMEOBJECT :number = 31;	//use_gameobject
	/*��������-����λ��*/
	public static  CMSG_BAG_EXCHANGE_POS :number = 32;	//bag_exchange_pos
	/*��������-������Ʒ*/
	public static  CMSG_BAG_DESTROY :number = 33;	//bag_destroy
	/*�ָ���Ʒ*/
	public static  CMSG_BAG_ITEM_SPLIT :number = 34;	//bag_item_split
	/*ʹ����Ʒ*/
	public static  CMSG_BAG_ITEM_USER :number = 35;	//bag_item_user
	/*�·���Ʒ��ȴ*/
	public static  SMSG_BAG_ITEM_COOLDOWN :number = 36;	//bag_item_cooldown
	/*grid�е�unit�ƶ�������*/
	public static  SMSG_GRID_UNIT_MOVE :number = 37;	//grid_unit_move
	/*grid�е�unit�ƶ�������2*/
	public static  SMSG_GRID_UNIT_MOVE_2 :number = 38;	//grid_unit_move_2
	/*�һ���Ʒ*/
	public static  CMSG_EXCHANGE_ITEM :number = 39;	//exchange_item
	/*������չ*/
	public static  CMSG_BAG_EXTENSION :number = 40;	//bag_extension
	/*����NPC��Ʒ�б�*/
	public static  CMSG_NPC_GET_GOODS_LIST :number = 41;	//npc_get_goods_list
	/*Npc��Ʒ�б�*/
	public static  SMSG_NPC_GOODS_LIST :number = 42;	//npc_goods_list
	/*������Ʒ*/
	public static  CMSG_STORE_BUY :number = 43;	//store_buy
	/*������Ʒ*/
	public static  CMSG_NPC_SELL :number = 44;	//npc_sell
	/*�ع���Ʒ*/
	public static  CMSG_NPC_REPURCHASE :number = 45;	//npc_repurchase
	/*ʱװ�Ƿ�����*/
	public static  CMSG_AVATAR_FASHION_ENABLE :number = 46;	//avatar_fashion_enable
	/*����Ի�ѡ��*/
	public static  CMSG_QUESTHELP_TALK_OPTION :number = 47;	//questhelp_talk_option
	/*��NPC�Ի���ô��͵��б�*/
	public static  CMSG_TAXI_HELLO :number = 48;	//taxi_hello
	/*���ʹ��͵��б�*/
	public static  SMSG_TAXI_STATIONS_LIST :number = 49;	//taxi_stations_list
	/*ѡ���͵�*/
	public static  CMSG_TAXI_SELECT_STATION :number = 50;	//taxi_select_station
	/*��NPC����ѡ��ѡ��*/
	public static  CMSG_GOSSIP_SELECT_OPTION :number = 51;	//gossip_select_option
	/*��NPC���Ļ�ȡѡ��*/
	public static  CMSG_GOSSIP_HELLO :number = 52;	//gossip_hello
	/*����������Ϣ��ѡ��*/
	public static  SMSG_GOSSIP_MESSAGE :number = 53;	//gossip_message
	/*���񷢲���״̬��ѯ*/
	public static  CMSG_QUESTGIVER_STATUS_QUERY :number = 54;	//questgiver_status_query
	/*����NPC״̬*/
	public static  SMSG_QUESTGIVER_STATUS :number = 55;	//questgiver_status
	/*��ѯ����״̬*/
	public static  MSG_QUERY_QUEST_STATUS :number = 56;	//query_quest_status
	/*�ɽ�����*/
	public static  CMSG_QUESTHELP_GET_CANACCEPT_LIST :number = 57;	//questhelp_get_canaccept_list
	/*�·��ɽ������б�*/
	public static  SMSG_QUESTHELP_CANACCEPT_LIST :number = 58;	//questhelp_canaccept_list
	/*����ʧ��*/
	public static  SMSG_QUESTUPDATE_FAILD :number = 59;	//questupdate_faild
	/*�����������*/
	public static  SMSG_QUESTUPDATE_COMPLETE :number = 60;	//questupdate_complete
	/*��������*/
	public static  CMSG_QUESTLOG_REMOVE_QUEST :number = 61;	//questlog_remove_quest
	/*�������*/
	public static  CMSG_QUESTGIVER_COMPLETE_QUEST :number = 62;	//questgiver_complete_quest
	/*��������֪ͨ���������¸�����*/
	public static  SMSG_QUESTHELP_NEXT :number = 63;	//questhelp_next
	/*����ϵͳǿ���������*/
	public static  CMSG_QUESTHELP_COMPLETE :number = 64;	//questhelp_complete
	/*��������ɹ�*/
	public static  SMSG_QUESTUPDATE_ACCEPT :number = 65;	//questupdate_accept
	/*�����������_�±�����*/
	public static  CMSG_QUESTHELP_UPDATE_STATUS :number = 66;	//questhelp_update_status
	/*���������*/
	public static  SMSG_QUESTGETTER_COMPLETE :number = 67;	//questgetter_complete
	/*������*/
	public static  CMSG_QUESTGIVER_ACCEPT_QUEST :number = 68;	//questgiver_accept_quest
	/*����ʹ����Ʒ*/
	public static  CMSG_QUESTUPDATE_USE_ITEM :number = 69;	//questupdate_use_item
	/*��ѯ��������*/
	public static  CMSG_QUESTHELP_QUERY_BOOK :number = 70;	//questhelp_query_book
	/*�·��ɽ���������*/
	public static  SMSG_QUESTHELP_BOOK_QUEST :number = 71;	//questhelp_book_quest
	/*���ʹ����Ϸ�����Ժ�Ķ���*/
	public static  SMSG_USE_GAMEOBJECT_ACTION :number = 72;	//use_gameobject_action
	/*���ù���ģʽ*/
	public static  CMSG_SET_ATTACK_MODE :number = 73;	//set_attack_mode
	/*ѡ��Ŀ��*/
	public static  MSG_SELECT_TARGET :number = 74;	//select_target
	/*����ս��*/
	public static  SMSG_COMBAT_STATE_UPDATE :number = 75;	//combat_state_update
	/*�������*/
	public static  SMSG_EXP_UPDATE :number = 76;	//exp_update
	/*�ͻ����ͷż���*/
	public static  MSG_SPELL_START :number = 77;	//spell_start
	/*ʩ��ֹͣ*/
	public static  MSG_SPELL_STOP :number = 78;	//spell_stop
	/*��*/
	public static  MSG_JUMP :number = 79;	//jump
	/*����*/
	public static  CMSG_RESURRECTION :number = 80;	//resurrection
	/*���׷�������*/
	public static  MSG_TRADE_REQUEST :number = 81;	//trade_request
	/*���������*/
	public static  MSG_TRADE_REPLY :number = 82;	//trade_reply
	/*���׿�ʼ*/
	public static  SMSG_TRADE_START :number = 83;	//trade_start
	/*����ȷ����Ʒ*/
	public static  MSG_TRADE_DECIDE_ITEMS :number = 84;	//trade_decide_items
	/*�������*/
	public static  SMSG_TRADE_FINISH :number = 85;	//trade_finish
	/*����ȡ��*/
	public static  MSG_TRADE_CANCEL :number = 86;	//trade_cancel
	/*����׼����*/
	public static  MSG_TRADE_READY :number = 87;	//trade_ready
	/*���ｲ��*/
	public static  SMSG_CHAT_UNIT_TALK :number = 88;	//chat_unit_talk
	/*�ͽ�����*/
	public static  CMSG_CHAT_NEAR :number = 89;	//chat_near
	/*˽��*/
	public static  CMSG_CHAT_WHISPER :number = 90;	//chat_whisper
	/*��Ӫ����*/
	public static  MSG_CHAT_FACTION :number = 91;	//chat_faction
	/*����*/
	public static  MSG_CHAT_WORLD :number = 92;	//chat_world
	/*����*/
	public static  MSG_CHAT_HORN :number = 93;	//chat_horn
	/*����*/
	public static  MSG_CHAT_NOTICE :number = 94;	//chat_notice
	/*��ѯ�����Ϣ*/
	public static  CMSG_QUERY_PLAYER_INFO :number = 95;	//query_player_info
	/*��ѯ��Ϣ�������*/
	public static  SMSG_QUERY_RESULT_UPDATE_OBJECT :number = 96;	//query_result_update_object
	/*��ȡ���*/
	public static  CMSG_RECEIVE_GIFT_PACKS :number = 97;	//receive_gift_packs
	/*��ͼ�������*/
	public static  SMSG_MAP_UPDATE_OBJECT :number = 98;	//map_update_object
	/*ս����Ϣbinlog*/
	public static  SMSG_FIGHTING_INFO_UPDATE_OBJECT :number = 99;	//fighting_info_update_object
	/*ս����Ϣbinlog*/
	public static  SMSG_FIGHTING_INFO_UPDATE_OBJECT_2 :number = 100;	//fighting_info_update_object_2
	/*���븱��*/
	public static  CMSG_INSTANCE_ENTER :number = 101;	//instance_enter
	/*�����˷��͸���������һ�׶�ָ��*/
	public static  CMSG_INSTANCE_NEXT_STATE :number = 102;	//instance_next_state
	/*�����˳�*/
	public static  CMSG_INSTANCE_EXIT :number = 103;	//instance_exit
	/*��ʱ���ȡ*/
	public static  CMSG_LIMIT_ACTIVITY_RECEIVE :number = 104;	//limit_activity_receive
	/*ɱ����~~��������*/
	public static  SMSG_KILL_MAN :number = 105;	//kill_man
	/*�������*/
	public static  SMSG_PLAYER_UPGRADE :number = 106;	//player_upgrade
	/*�ֿ��Ǯ*/
	public static  CMSG_WAREHOUSE_SAVE_MONEY :number = 107;	//warehouse_save_money
	/*�ֿ�ȡǮ*/
	public static  CMSG_WAREHOUSE_TAKE_MONEY :number = 108;	//warehouse_take_money
	/*ʹ��Ԫ������ĳ��*/
	public static  CMSG_USE_GOLD_OPT :number = 109;	//use_gold_opt
	/*ʹ��ͭǮ����ĳ��*/
	public static  CMSG_USE_SILVER_OPT :number = 110;	//use_silver_opt
	/*��̨����*/
	public static  SMSG_GM_RIGHTFLOAT :number = 111;	//gm_rightfloat
	/*ɾ��ĳ����̨����*/
	public static  SMSG_DEL_GM_RIGHTFLOAT :number = 112;	//del_gm_rightfloat
	/*Ӧ�÷�ͬ��ʱ��*/
	public static  MSG_SYNC_MSTIME_APP :number = 113;	//sync_mstime_app
	/*��Ҵ�ĳ������*/
	public static  CMSG_OPEN_WINDOW :number = 114;	//open_window
	/*���Բ���*/
	public static  CMSG_PLAYER_GAG :number = 115;	//player_gag
	/*���˲���*/
	public static  CMSG_PLAYER_KICKING :number = 116;	//player_kicking
	/*�Ϸ�֪ͨ*/
	public static  SMSG_MERGE_SERVER_MSG :number = 117;	//merge_server_msg
	/*��ȡ������Ϣ*/
	public static  CMSG_RANK_LIST_QUERY :number = 118;	//rank_list_query
	/*�ͻ��˻�ȡ���а񷵻ؽ��*/
	public static  SMSG_RANK_LIST_QUERY_RESULT :number = 119;	//rank_list_query_result
	/*�ͻ����ȸ�����ģ����ȡuint*/
	public static  CMSG_CLIENT_UPDATE_SCENED :number = 120;	//client_update_scened
	/*��ֵ��*/
	public static  SMSG_NUM_LUA :number = 121;	//num_lua
	/*ս��Ʒʰȡ*/
	public static  CMSG_LOOT_SELECT :number = 122;	//loot_select
	/*֪ͨ��¼������Ҵ�����Ϸ��*/
	public static  CMSG_GOBACK_TO_GAME_SERVER :number = 123;	//goback_to_game_server
	/*�ͻ��˰ѱ�����Ա���ݴ���������*/
	public static  CMSG_WORLD_WAR_CS_PLAYER_INFO :number = 124;	//world_war_CS_player_info
	/*��Ҽ�������뿪ĳ������*/
	public static  SMSG_JOIN_OR_LEAVE_SERVER :number = 125;	//join_or_leave_server
	/*�ͻ�����������Ա����*/
	public static  MSG_WORLD_WAR_SC_PLAYER_INFO :number = 126;	//world_war_SC_player_info
	/*�ͻ��˶�����Ϣ*/
	public static  MSG_CLIENTSUBSCRIPTION :number = 127;	//clientSubscription
	/*������·�lua�ű�*/
	public static  SMSG_LUA_SCRIPT :number = 128;	//lua_script
	/*��ɫ������Ϣ*/
	public static  CMSG_CHAR_UPDATE_INFO :number = 129;	//char_update_info
	/*֪ͨ�ͻ��˹۲��ߵ��ӽ�*/
	public static  SMSG_NOTICE_WATCHER_MAP_INFO :number = 130;	//notice_watcher_map_info
	/*�ͻ��˶��Ķ�����Ϣ*/
	public static  CMSG_MODIFY_WATCH :number = 131;	//modify_watch
	/*�������*/
	public static  CMSG_KUAFU_CHUANSONG :number = 132;	//kuafu_chuansong
	/*��ʾ��ǰװ��*/
	public static  CMSG_SHOW_SUIT :number = 133;	//show_suit
	/*��ʾ��ǰ����*/
	public static  CMSG_SHOW_POSITION :number = 134;	//show_position
	/*Ԫ������*/
	public static  CMSG_GOLD_RESPAWN :number = 135;	//gold_respawn
	/*Ұ����������ʱ*/
	public static  SMSG_FIELD_DEATH_COOLDOWN :number = 136;	//field_death_cooldown
	/*�̳ǹ���*/
	public static  CMSG_MALL_BUY :number = 137;	//mall_buy
	/*ǿ��*/
	public static  CMSG_STRENGTH :number = 139;	//strength
	/*ǿ���ɹ�*/
	public static  SMSG_STRENGTH_SUCCESS :number = 140;	//strength_success
	/*ǿ�ƽ���*/
	public static  CMSG_FORCEINTO :number = 141;	//forceInto
	/*��������*/
	public static  CMSG_CREATE_FACTION :number = 142;	//create_faction
	/*��������*/
	public static  CMSG_FACTION_UPGRADE :number = 143;	//faction_upgrade
	/*����������*/
	public static  CMSG_FACTION_JOIN :number = 144;	//faction_join
	/*������������*/
	public static  CMSG_RAISE_BASE_SPELL :number = 145;	//raise_base_spell
	/*�������׷�ŭ����*/
	public static  CMSG_UPGRADE_ANGER_SPELL :number = 146;	//upgrade_anger_spell
	/*������������*/
	public static  CMSG_RAISE_MOUNT :number = 147;	//raise_mount
	/*������������*/
	public static  CMSG_UPGRADE_MOUNT :number = 148;	//upgrade_mount
	/*����һ����������*/
	public static  CMSG_UPGRADE_MOUNT_ONE_STEP :number = 149;	//upgrade_mount_one_step
	/*��������û�����*/
	public static  CMSG_ILLUSION_MOUNT_ACTIVE :number = 150;	//illusion_mount_active
	/*����û�����*/
	public static  CMSG_ILLUSION_MOUNT :number = 151;	//illusion_mount
	/*�������*/
	public static  CMSG_RIDE_MOUNT :number = 152;	//ride_mount
	/*grid�е�unit��Ծ*/
	public static  SMSG_GRID_UNIT_JUMP :number = 153;	//grid_unit_jump
	/*��ʯ*/
	public static  CMSG_GEM :number = 154;	//gem
	/*�����л�ģʽ*/
	public static  CMSG_CHANGE_BATTLE_MODE :number = 155;	//change_battle_mode
	/*��ƽģʽCD*/
	public static  SMSG_PEACE_MODE_CD :number = 156;	//peace_mode_cd
	/*�������*/
	public static  CMSG_DIVINE_ACTIVE :number = 157;	//divine_active
	/*�������*/
	public static  CMSG_DIVINE_UPLEV :number = 158;	//divine_uplev
	/*�л����*/
	public static  CMSG_DIVINE_SWITCH :number = 159;	//divine_switch
	/*������Ծ*/
	public static  CMSG_JUMP_START :number = 160;	//jump_start
	/*�������vip����*/
	public static  CMSG_ENTER_VIP_INSTANCE :number = 161;	//enter_vip_instance
	/*����ɨ��vip����*/
	public static  CMSG_SWEEP_VIP_INSTANCE :number = 162;	//sweep_vip_instance
	/*���йһ�*/
	public static  CMSG_HANG_UP :number = 163;	//hang_up
	/*���йһ�����*/
	public static  CMSG_HANG_UP_SETTING :number = 164;	//hang_up_setting
	/*�����������������*/
	public static  CMSG_ENTER_TRIAL_INSTANCE :number = 165;	//enter_trial_instance
	/*ɨ������������*/
	public static  CMSG_SWEEP_TRIAL_INSTANCE :number = 166;	//sweep_trial_instance
	/*����������*/
	public static  CMSG_RESET_TRIAL_INSTANCE :number = 167;	//reset_trial_instance
	/*ɨ����������*/
	public static  SMSG_SWEEP_INSTANCE_REWARD :number = 168;	//sweep_instance_reward
	/*�ؽ�����*/
	public static  CMSG_REENTER_INSTANCE :number = 169;	//reenter_instance
	/*�������Ϣ*/
	public static  SMSG_MERRY_GO_ROUND :number = 170;	//merry_go_round
	/*��Ӻ���*/
	public static  CMSG_SOCIAL_ADD_FRIEND :number = 171;	//social_add_friend
	/*ͬ����Ӻ���*/
	public static  CMSG_SOCIAL_SUREADD_FRIEND :number = 172;	//social_sureadd_friend
	/*��������*/
	public static  CMSG_SOCIAL_GIFT_FRIEND :number = 173;	//social_gift_friend
	/*�Ƽ������б�*/
	public static  CMSG_SOCIAL_RECOMMEND_FRIEND :number = 174;	//social_recommend_friend
	/*�Ƽ������б�*/
	public static  SMSG_SOCIAL_GET_RECOMMEND_FRIEND :number = 175;	//social_get_recommend_friend
	/*����*/
	public static  CMSG_SOCIAL_REVENGE_ENEMY :number = 176;	//social_revenge_enemy
	/*ɾ������*/
	public static  CMSG_SOCIAL_DEL_FRIEND :number = 177;	//social_del_friend
	/*�س�*/
	public static  CMSG_TELEPORT_MAIN_CITY :number = 178;	//teleport_main_city
	/*��ͬƵ������*/
	public static  CMSG_CHAT_BY_CHANNEL :number = 179;	//chat_by_channel
	/*��������*/
	public static  SMSG_SEND_CHAT :number = 180;	//send_chat
	/*��������б�*/
	public static  CMSG_SOCIAL_CLEAR_APPLY :number = 181;	//social_clear_apply
	/*���þܾ�������Ϣ*/
	public static  CMSG_MSG_DECLINE :number = 182;	//msg_decline
	/*�����б�*/
	public static  SMSG_FACTION_GET_LIST_RESULT :number = 183;	//faction_get_list_result
	/*��ȡ�����б�*/
	public static  CMSG_FACTION_GETLIST :number = 184;	//faction_getlist
	/*���ɹ���*/
	public static  CMSG_FACTION_MANAGER :number = 185;	//faction_manager
	/*���ɳ�Ա����*/
	public static  CMSG_FACTION_MEMBER_OPERATE :number = 186;	//faction_member_operate
	/*���ټ������*/
	public static  CMSG_FACTION_FAST_JOIN :number = 187;	//faction_fast_join
	/*ͨ��������Ӻ���*/
	public static  CMSG_SOCIAL_ADD_FRIEND_BYNAME :number = 188;	//social_add_friend_byname
	/*���ʼ�*/
	public static  CMSG_READ_MAIL :number = 190;	//read_mail
	/*��ȡ�ʼ�*/
	public static  CMSG_PICK_MAIL :number = 191;	//pick_mail
	/*ɾ���ʼ�*/
	public static  CMSG_REMOVE_MAIL :number = 192;	//remove_mail
	/*һ����ȡ�ʼ�*/
	public static  CMSG_PICK_MAIL_ONE_STEP :number = 193;	//pick_mail_one_step
	/*һ��ɾ���ʼ�*/
	public static  CMSG_REMOVE_MAIL_ONE_STEP :number = 194;	//remove_mail_one_step
	/*����ĳ��*/
	public static  CMSG_BLOCK_CHAT :number = 195;	//block_chat
	/*ȡ������*/
	public static  CMSG_CANCEL_BLOCK_CHAT :number = 196;	//cancel_block_chat
	/*ʹ����Ҫ�㲥����Ϸ����*/
	public static  CMSG_USE_BROADCAST_GAMEOBJECT :number = 200;	//use_broadcast_gameobject
	/*����BOSS����*/
	public static  CMSG_WORLD_BOSS_ENROLL :number = 201;	//world_boss_enroll
	/*����BOSS��ս*/
	public static  CMSG_WORLD_BOSS_FIGHT :number = 202;	//world_boss_fight
	/*����*/
	public static  CMSG_CHANGE_LINE :number = 203;	//change_line
	/*roll����BOSS����*/
	public static  CMSG_ROLL_WORLD_BOSS_TREASURE :number = 204;	//roll_world_boss_treasure
	/*roll����*/
	public static  SMSG_ROLL_RESULT :number = 205;	//roll_result
	/*��ǰ����BOSS�˺�����*/
	public static  SMSG_WORLD_BOSS_RANK :number = 206;	//world_boss_rank
	/*���а����*/
	public static  CMSG_RANK_ADD_LIKE :number = 207;	//rank_add_like
	/*���а���޽��*/
	public static  SMSG_RANK_ADD_LIKE_RESULT :number = 208;	//rank_add_like_result
	/*������Դ����*/
	public static  CMSG_RES_INSTANCE_ENTER :number = 210;	//res_instance_enter
	/*ɨ����Դ����*/
	public static  CMSG_RES_INSTANCE_SWEEP :number = 211;	//res_instance_sweep
	/*�鿴����ͼ�ķ��ߺ�*/
	public static  CMSG_SHOW_MAP_LINE :number = 212;	//show_map_line
	/*���ر���ͼ�ķ��ߺ���Ϣ*/
	public static  SMSG_SEND_MAP_LINE :number = 213;	//send_map_line
	/*��ý�����ʾ*/
	public static  SMSG_ITEM_NOTICE :number = 214;	//item_notice
	/*���͵�ĳ�������ͼ*/
	public static  CMSG_TELEPORT_MAP :number = 216;	//teleport_map
	/*���͵�Ұ��boss�Ա�*/
	public static  CMSG_TELEPORT_FIELD_BOSS :number = 217;	//teleport_field_boss
	/*��Ծ�Ƚ���*/
	public static  CMSG_GET_ACTIVITY_REWARD :number = 218;	//get_activity_reward
	/*�ɾͽ���*/
	public static  CMSG_GET_ACHIEVE_REWARD :number = 220;	//get_achieve_reward
	/*�ܳɾͽ���*/
	public static  CMSG_GET_ACHIEVE_ALL_REWARD :number = 221;	//get_achieve_all_reward
	/*װ���ƺ�*/
	public static  CMSG_SET_TITLE :number = 222;	//set_title
	/*��ʼ���ƺ�*/
	public static  CMSG_INIT_TITLE :number = 223;	//init_title
	/*��ȡ�׳佱��*/
	public static  CMSG_WELFARE_SHOUCHONG_REWARD :number = 224;	//welfare_shouchong_reward
	/*ÿ��ǩ������*/
	public static  CMSG_WELFARE_CHECKIN :number = 225;	//welfare_checkin
	/*�ۻ�ǩ������*/
	public static  CMSG_WELFARE_CHECKIN_ALL :number = 226;	//welfare_checkin_all
	/*��ǩ����*/
	public static  CMSG_WELFARE_CHECKIN_GETBACK :number = 227;	//welfare_checkin_getback
	/*�ȼ�����*/
	public static  CMSG_WELFARE_LEVEL :number = 228;	//welfare_level
	/*��һؽ���*/
	public static  CMSG_WELFARE_ACTIVE_GETBACK :number = 229;	//welfare_active_getback
	/*��ȡ������*/
	public static  CMSG_PICK_QUEST_REWARD :number = 230;	//pick_quest_reward
	/*��npc�Ի�*/
	public static  CMSG_TALK_WITH_NPC :number = 231;	//talk_with_npc
	/*ʹ��������Ʒ*/
	public static  CMSG_USE_VIRTUAL_ITEM :number = 232;	//use_virtual_item
	/*��ȡ�����½ڽ���*/
	public static  CMSG_PICK_QUEST_CHAPTER_REWARD :number = 233;	//pick_quest_chapter_reward
	/*3v3���ƥ��*/
	public static  CMSG_KUAFU_3V3_MATCH :number = 234;	//kuafu_3v3_match
	/*�����ʼƥ��*/
	public static  SMSG_KUAFU_MATCH_START :number = 235;	//kuafu_match_start
	/*3v3�������*/
	public static  CMSG_KUAFU_3V3_BUYTIMES :number = 236;	//kuafu_3v3_buytimes
	/*3v3ÿ�ջ�Ծ����*/
	public static  CMSG_KUAFU_3V3_DAYREWARD :number = 237;	//kuafu_3v3_dayreward
	/*����3v3���а�*/
	public static  CMSG_KUAFU_3V3_GETRANLIST :number = 238;	//kuafu_3v3_getranlist
	/*3v3���а����б�*/
	public static  SMSG_KUAFU_3V3_RANLIST :number = 239;	//kuafu_3v3_ranlist
	/*�������н����б�*/
	public static  CMSG_WELFARE_GETALLLIST_GETBACK :number = 240;	//welfare_getalllist_getback
	/*�����б�*/
	public static  SMSG_WELFARE_REWARDLIST_GETBACK :number = 241;	//welfare_rewardlist_getback
	/*һ����ȡ���и���*/
	public static  CMSG_WELFARE_GETALL_GETBACK :number = 242;	//welfare_getall_getback
	/*����3v3���а��Լ�������*/
	public static  CMSG_KUAFU_3V3_GETMYRANK :number = 248;	//kuafu_3v3_getmyrank
	/*3v3���а��Լ������ν��*/
	public static  SMSG_KUAFU_3V3_MYRANK :number = 249;	//kuafu_3v3_myrank
	/*��ɱ����*/
	public static  SMSG_KUAFU_3V3_KILL_DETAIL :number = 250;	//kuafu_3v3_kill_detail
	/*���ƥ��ȴ�����*/
	public static  SMSG_KUAFU_3V3_WAIT_INFO :number = 251;	//kuafu_3v3_wait_info
	/*ȡ��ƥ��*/
	public static  MSG_KUAFU_3V3_CANCEL_MATCH :number = 252;	//kuafu_3v3_cancel_match
	/*ƥ�䵽��&���ܻ��߾ܾ�*/
	public static  CMSG_KUAFU_3V3_MATCH_OPER :number = 253;	//kuafu_3v3_match_oper
	/*�ܾ�����*/
	public static  SMSG_KUAFU_3V3_DECLINE_MATCH :number = 254;	//kuafu_3v3_decline_match
	/*�ɸ��ᱦ���ƥ��*/
	public static  CMSG_KUAFU_XIANFU_MATCH :number = 255;	//kuafu_xianfu_match
	/*�ɸ��ᱦ���ƥ��ȴ�*/
	public static  SMSG_KUAFU_XIANFU_MATCH_WAIT :number = 256;	//kuafu_xianfu_match_wait
	/*�ɸ��ᱦС��ͼ��Ϣ*/
	public static  SMSG_KUAFU_XIANFU_MINIMAP_INFO :number = 257;	//kuafu_xianfu_minimap_info
	/*�����ɸ�����ȯ*/
	public static  CMSG_BUY_XIANFU_ITEM :number = 258;	//buy_xianfu_item
	/*�������*/
	public static  CMSG_XIANFU_RANDOM_RESPAWN :number = 259;	//xianfu_random_respawn
	/*����̨��ս*/
	public static  CMSG_DOUJIANTAI_FIGHT :number = 260;	//doujiantai_fight
	/*����̨�������*/
	public static  CMSG_DOUJIANTAI_BUYTIME :number = 261;	//doujiantai_buytime
	/*����̨����CD*/
	public static  CMSG_DOUJIANTAI_CLEARCD :number = 262;	//doujiantai_clearcd
	/*����̨��ʤ����*/
	public static  CMSG_DOUJIANTAI_FIRST_REWARD :number = 263;	//doujiantai_first_reward
	/*����̨��ս������Ϣ*/
	public static  MSG_DOUJIANTAI_GET_ENEMYS_INFO :number = 265;	//doujiantai_get_enemys_info
	/*����̨���а�*/
	public static  CMSG_DOUJIANTAI_GET_RANK :number = 266;	//doujiantai_get_rank
	/*����̨ˢ�¶���*/
	public static  CMSG_DOUJIANTAI_REFRESH_ENEMYS :number = 270;	//doujiantai_refresh_enemys
	/*����̨����*/
	public static  MSG_DOUJIANTAI_TOP3 :number = 271;	//doujiantai_top3
	/*ʹ������*/
	public static  MSG_USE_JUMP_POINT :number = 272;	//use_jump_point
	/*������Ʒ*/
	public static  CMSG_BAG_ITEM_SELL :number = 273;	//bag_item_sell
	/*������Ʒ*/
	public static  CMSG_BAG_ITEM_SORT :number = 274;	//bag_item_sort
	/*�ύ�ճ�����*/
	public static  CMSG_SUBMIT_QUEST_DAILY2 :number = 280;	//submit_quest_daily2
	/*���Ըı�*/
	public static  SMSG_ATTRIBUTE_CHANGED :number = 281;	//attribute_changed
	/*�����и�ǿװ��*/
	public static  SMSG_BAG_FIND_EQUIP_BETTER :number = 282;	//bag_find_equip_better
	/*ģ�����*/
	public static  SMSG_MODULE_ACTIVE :number = 283;	//module_active
	/*��ȡ�ճ�������*/
	public static  CMSG_PICK_DAILY2_QUEST_REWARD :number = 284;	//pick_daily2_quest_reward
	/*��ɵ�ǰ����*/
	public static  CMSG_FINISH_NOW_GUIDE :number = 285;	//finish_now_guide
	/*ȡ����������Ϣ*/
	public static  CMSG_GET_CULTIVATION_INFO :number = 286;	//get_cultivation_info
	/*������������Ϣ*/
	public static  SMSG_UPDATE_CULTIVATION_INFO :number = 287;	//update_cultivation_info
	/*ȡ�õ�ǰ����������������Ϣ*/
	public static  CMSG_GET_CULTIVATION_RIVALS_INFO :number = 288;	//get_cultivation_rivals_info
	/*����������������Ϣ*/
	public static  SMSG_UPDATE_CULTIVATION_RIVALS_INFO_LIST :number = 289;	//update_cultivation_rivals_info_list
	/*��ȡ����������*/
	public static  CMSG_GET_CULTIVATION_REWARD :number = 290;	//get_cultivation_reward
	/*ˢ������������*/
	public static  CMSG_REFRESH_CULTIVATION_RIVALS :number = 291;	//refresh_cultivation_rivals
	/*�Ӷ�����������*/
	public static  CMSG_PLUNDER_CULTIVATION_RIVAL :number = 292;	//plunder_cultivation_rival
	/*������������������*/
	public static  CMSG_REVENGE_CULTIVATION_RIVAL :number = 293;	//revenge_cultivation_rival
	/*����������ʣ����ս����*/
	public static  CMSG_BUY_CULTIVATION_LEFT_PLUNDER_COUNT :number = 294;	//buy_cultivation_left_plunder_count
	/*����������ս�����*/
	public static  SMSG_SHOW_CULTIVATION_RESULT_LIST :number = 295;	//show_cultivation_result_list
	/*��ȡ��¼������*/
	public static  CMSG_GET_LOGIN_ACTIVITY_REWARD :number = 296;	//get_login_activity_reward
	/*֪ͨ�ͻ����ͷ���������*/
	public static  SMSG_CAST_SPELL_START :number = 300;	//cast_spell_start
	/*��ɷ�ǿ�������Ĳ���*/
	public static  CMSG_FINISH_OPTIONAL_GUIDE_STEP :number = 301;	//finish_optional_guide_step
	/*ִ�нӵ������Ժ������*/
	public static  CMSG_EXECUTE_QUEST_CMD_AFTER_ACCEPTED :number = 302;	//execute_quest_cmd_after_accepted
	/*֪ͨ�ͻ�����ʾ����*/
	public static  SMSG_SHOW_UNIT_ATTRIBUTE :number = 310;	//show_unit_attribute
	/*���ؼ���*/
	public static  CMSG_BACK_TO_FAMITY :number = 320;	//back_to_famity
	/*���ؼ���boss���*/
	public static  SMSG_FACTION_BOSS_SEND_RESULT :number = 321;	//faction_boss_send_result
	/*��սboss*/
	public static  CMSG_CHALLANGE_BOSS :number = 322;	//challange_boss
	/*��ȡ���߽���*/
	public static  CMSG_PICK_OFFLINE_REWARD :number = 325;	//pick_offline_reward
	/*���߽������*/
	public static  SMSG_OFFLINE_REWARD_RESULT :number = 326;	//offline_reward_result
	/*����װ��*/
	public static  CMSG_SMELTING_EQUIP :number = 327;	//smelting_equip
	/*�Ͻ�װ��*/
	public static  CMSG_STOREHOUSE_HAND_IN :number = 328;	//storehouse_hand_in
	/*�һ�װ��*/
	public static  CMSG_STOREHOUSE_EXCHANGE :number = 329;	//storehouse_exchange
	/*����װ��*/
	public static  CMSG_STOREHOUSE_DESTROY :number = 330;	//storehouse_destroy
	private _FUNCS:Object = new Object();
		
		/**
		 * ��ȡ����Э�麯������
		 * @param cmd:uint
		 */		
	public getFuncName(cmd:number):string{
		if(this._FUNCS[cmd]){
			return this._FUNCS[cmd];
		}
		return null;
	}
		
	private _send_func:Function;
	private _stream:ByteArray = new ByteArray;
		
		/**
		 * �����������ݰ����Զ����ܣ� 
		 * @param stream
		 */
	public constructor(f:Function){
		this._send_func = f;
		this._stream.endian = Endian.LITTLE_ENDIAN;
			
		this._FUNCS[0] = "null_action";
		this._FUNCS[1] = "ping_pong";
		this._FUNCS[2] = "forced_into";
		this._FUNCS[3] = "get_session";
		this._FUNCS[4] = "route_trace";
		this._FUNCS[5] = "write_client_log";
		this._FUNCS[7] = "sync_mstime";
		this._FUNCS[9] = "ud_control";
		this._FUNCS[15] = "get_chars_list";
		this._FUNCS[17] = "check_name";
		this._FUNCS[19] = "char_create";
		this._FUNCS[21] = "delete_char";
		this._FUNCS[23] = "player_login";
		this._FUNCS[24] = "player_logout";
		this._FUNCS[25] = "regularise_account";
		this._FUNCS[26] = "char_remotestore";
		this._FUNCS[27] = "char_remotestore_str";
		this._FUNCS[28] = "teleport";
		this._FUNCS[29] = "move_stop";
		this._FUNCS[30] = "unit_move";
		this._FUNCS[31] = "use_gameobject";
		this._FUNCS[32] = "bag_exchange_pos";
		this._FUNCS[33] = "bag_destroy";
		this._FUNCS[34] = "bag_item_split";
		this._FUNCS[35] = "bag_item_user";
		this._FUNCS[39] = "exchange_item";
		this._FUNCS[40] = "bag_extension";
		this._FUNCS[41] = "npc_get_goods_list";
		this._FUNCS[43] = "store_buy";
		this._FUNCS[44] = "npc_sell";
		this._FUNCS[45] = "npc_repurchase";
		this._FUNCS[46] = "avatar_fashion_enable";
		this._FUNCS[47] = "questhelp_talk_option";
		this._FUNCS[48] = "taxi_hello";
		this._FUNCS[50] = "taxi_select_station";
		this._FUNCS[51] = "gossip_select_option";
		this._FUNCS[52] = "gossip_hello";
		this._FUNCS[54] = "questgiver_status_query";
		this._FUNCS[56] = "query_quest_status";
		this._FUNCS[57] = "questhelp_get_canaccept_list";
		this._FUNCS[61] = "questlog_remove_quest";
		this._FUNCS[62] = "questgiver_complete_quest";
		this._FUNCS[64] = "questhelp_complete";
		this._FUNCS[66] = "questhelp_update_status";
		this._FUNCS[68] = "questgiver_accept_quest";
		this._FUNCS[69] = "questupdate_use_item";
		this._FUNCS[70] = "questhelp_query_book";
		this._FUNCS[73] = "set_attack_mode";
		this._FUNCS[74] = "select_target";
		this._FUNCS[77] = "spell_start";
		this._FUNCS[78] = "spell_stop";
		this._FUNCS[79] = "jump";
		this._FUNCS[80] = "resurrection";
		this._FUNCS[81] = "trade_request";
		this._FUNCS[82] = "trade_reply";
		this._FUNCS[84] = "trade_decide_items";
		this._FUNCS[86] = "trade_cancel";
		this._FUNCS[87] = "trade_ready";
		this._FUNCS[89] = "chat_near";
		this._FUNCS[90] = "chat_whisper";
		this._FUNCS[91] = "chat_faction";
		this._FUNCS[92] = "chat_world";
		this._FUNCS[93] = "chat_horn";
		this._FUNCS[94] = "chat_notice";
		this._FUNCS[95] = "query_player_info";
		this._FUNCS[97] = "receive_gift_packs";
		this._FUNCS[101] = "instance_enter";
		this._FUNCS[102] = "instance_next_state";
		this._FUNCS[103] = "instance_exit";
		this._FUNCS[104] = "limit_activity_receive";
		this._FUNCS[107] = "warehouse_save_money";
		this._FUNCS[108] = "warehouse_take_money";
		this._FUNCS[109] = "use_gold_opt";
		this._FUNCS[110] = "use_silver_opt";
		this._FUNCS[113] = "sync_mstime_app";
		this._FUNCS[114] = "open_window";
		this._FUNCS[115] = "player_gag";
		this._FUNCS[116] = "player_kicking";
		this._FUNCS[118] = "rank_list_query";
		this._FUNCS[120] = "client_update_scened";
		this._FUNCS[122] = "loot_select";
		this._FUNCS[123] = "goback_to_game_server";
		this._FUNCS[124] = "world_war_CS_player_info";
		this._FUNCS[126] = "world_war_SC_player_info";
		this._FUNCS[127] = "clientSubscription";
		this._FUNCS[129] = "char_update_info";
		this._FUNCS[131] = "modify_watch";
		this._FUNCS[132] = "kuafu_chuansong";
		this._FUNCS[133] = "show_suit";
		this._FUNCS[134] = "show_position";
		this._FUNCS[135] = "gold_respawn";
		this._FUNCS[137] = "mall_buy";
		this._FUNCS[139] = "strength";
		this._FUNCS[141] = "forceInto";
		this._FUNCS[142] = "create_faction";
		this._FUNCS[143] = "faction_upgrade";
		this._FUNCS[144] = "faction_join";
		this._FUNCS[145] = "raise_base_spell";
		this._FUNCS[146] = "upgrade_anger_spell";
		this._FUNCS[147] = "raise_mount";
		this._FUNCS[148] = "upgrade_mount";
		this._FUNCS[149] = "upgrade_mount_one_step";
		this._FUNCS[150] = "illusion_mount_active";
		this._FUNCS[151] = "illusion_mount";
		this._FUNCS[152] = "ride_mount";
		this._FUNCS[154] = "gem";
		this._FUNCS[155] = "change_battle_mode";
		this._FUNCS[157] = "divine_active";
		this._FUNCS[158] = "divine_uplev";
		this._FUNCS[159] = "divine_switch";
		this._FUNCS[160] = "jump_start";
		this._FUNCS[161] = "enter_vip_instance";
		this._FUNCS[162] = "sweep_vip_instance";
		this._FUNCS[163] = "hang_up";
		this._FUNCS[164] = "hang_up_setting";
		this._FUNCS[165] = "enter_trial_instance";
		this._FUNCS[166] = "sweep_trial_instance";
		this._FUNCS[167] = "reset_trial_instance";
		this._FUNCS[169] = "reenter_instance";
		this._FUNCS[171] = "social_add_friend";
		this._FUNCS[172] = "social_sureadd_friend";
		this._FUNCS[173] = "social_gift_friend";
		this._FUNCS[174] = "social_recommend_friend";
		this._FUNCS[176] = "social_revenge_enemy";
		this._FUNCS[177] = "social_del_friend";
		this._FUNCS[178] = "teleport_main_city";
		this._FUNCS[179] = "chat_by_channel";
		this._FUNCS[181] = "social_clear_apply";
		this._FUNCS[182] = "msg_decline";
		this._FUNCS[184] = "faction_getlist";
		this._FUNCS[185] = "faction_manager";
		this._FUNCS[186] = "faction_member_operate";
		this._FUNCS[187] = "faction_fast_join";
		this._FUNCS[188] = "social_add_friend_byname";
		this._FUNCS[190] = "read_mail";
		this._FUNCS[191] = "pick_mail";
		this._FUNCS[192] = "remove_mail";
		this._FUNCS[193] = "pick_mail_one_step";
		this._FUNCS[194] = "remove_mail_one_step";
		this._FUNCS[195] = "block_chat";
		this._FUNCS[196] = "cancel_block_chat";
		this._FUNCS[200] = "use_broadcast_gameobject";
		this._FUNCS[201] = "world_boss_enroll";
		this._FUNCS[202] = "world_boss_fight";
		this._FUNCS[203] = "change_line";
		this._FUNCS[204] = "roll_world_boss_treasure";
		this._FUNCS[207] = "rank_add_like";
		this._FUNCS[210] = "res_instance_enter";
		this._FUNCS[211] = "res_instance_sweep";
		this._FUNCS[212] = "show_map_line";
		this._FUNCS[216] = "teleport_map";
		this._FUNCS[217] = "teleport_field_boss";
		this._FUNCS[218] = "get_activity_reward";
		this._FUNCS[220] = "get_achieve_reward";
		this._FUNCS[221] = "get_achieve_all_reward";
		this._FUNCS[222] = "set_title";
		this._FUNCS[223] = "init_title";
		this._FUNCS[224] = "welfare_shouchong_reward";
		this._FUNCS[225] = "welfare_checkin";
		this._FUNCS[226] = "welfare_checkin_all";
		this._FUNCS[227] = "welfare_checkin_getback";
		this._FUNCS[228] = "welfare_level";
		this._FUNCS[229] = "welfare_active_getback";
		this._FUNCS[230] = "pick_quest_reward";
		this._FUNCS[231] = "talk_with_npc";
		this._FUNCS[232] = "use_virtual_item";
		this._FUNCS[233] = "pick_quest_chapter_reward";
		this._FUNCS[234] = "kuafu_3v3_match";
		this._FUNCS[236] = "kuafu_3v3_buytimes";
		this._FUNCS[237] = "kuafu_3v3_dayreward";
		this._FUNCS[238] = "kuafu_3v3_getranlist";
		this._FUNCS[240] = "welfare_getalllist_getback";
		this._FUNCS[242] = "welfare_getall_getback";
		this._FUNCS[248] = "kuafu_3v3_getmyrank";
		this._FUNCS[252] = "kuafu_3v3_cancel_match";
		this._FUNCS[253] = "kuafu_3v3_match_oper";
		this._FUNCS[255] = "kuafu_xianfu_match";
		this._FUNCS[258] = "buy_xianfu_item";
		this._FUNCS[259] = "xianfu_random_respawn";
		this._FUNCS[260] = "doujiantai_fight";
		this._FUNCS[261] = "doujiantai_buytime";
		this._FUNCS[262] = "doujiantai_clearcd";
		this._FUNCS[263] = "doujiantai_first_reward";
		this._FUNCS[265] = "doujiantai_get_enemys_info";
		this._FUNCS[266] = "doujiantai_get_rank";
		this._FUNCS[270] = "doujiantai_refresh_enemys";
		this._FUNCS[271] = "doujiantai_top3";
		this._FUNCS[272] = "use_jump_point";
		this._FUNCS[273] = "bag_item_sell";
		this._FUNCS[274] = "bag_item_sort";
		this._FUNCS[280] = "submit_quest_daily2";
		this._FUNCS[284] = "pick_daily2_quest_reward";
		this._FUNCS[285] = "finish_now_guide";
		this._FUNCS[286] = "get_cultivation_info";
		this._FUNCS[288] = "get_cultivation_rivals_info";
		this._FUNCS[290] = "get_cultivation_reward";
		this._FUNCS[291] = "refresh_cultivation_rivals";
		this._FUNCS[292] = "plunder_cultivation_rival";
		this._FUNCS[293] = "revenge_cultivation_rival";
		this._FUNCS[294] = "buy_cultivation_left_plunder_count";
		this._FUNCS[296] = "get_login_activity_reward";
		this._FUNCS[301] = "finish_optional_guide_step";
		this._FUNCS[302] = "execute_quest_cmd_after_accepted";
		this._FUNCS[320] = "back_to_famity";
		this._FUNCS[322] = "challange_boss";
		this._FUNCS[325] = "pick_offline_reward";
		this._FUNCS[327] = "smelting_equip";
		this._FUNCS[328] = "storehouse_hand_in";
		this._FUNCS[329] = "storehouse_exchange";
		this._FUNCS[330] = "storehouse_destroy";
	}
		
	public null_action ():void{
		this._stream.reset();
		this._stream.optcode = 0;
		this._stream.writeUint16( 0 );
		this._send_func(this._stream);			
	}
	public ping_pong ():void{
		this._stream.reset();
		this._stream.optcode = 1;
		this._stream.writeUint16( 1 );
		this._send_func(this._stream);			
	}
	public forced_into ():void{
		this._stream.reset();
		this._stream.optcode = 2;
		this._stream.writeUint16( 2 );
		this._send_func(this._stream);			
	}
	public get_session ( sessionkey :string  ,account :string  ,version :string ):void{
		this._stream.reset();
		this._stream.optcode = 3;
		this._stream.writeUint16( 3 );
			//
		this._stream.writeString (sessionkey);		
			//���id
		this._stream.writeString (account);		
			//�汾
		this._stream.writeString (version);		
		this._send_func(this._stream);			
	}
	public route_trace ( val :string ):void{
		this._stream.reset();
		this._stream.optcode = 4;
		this._stream.writeUint16( 4 );
			//
		this._stream.writeString (val);		
		this._send_func(this._stream);			
	}
	public write_client_log ( type :number  ,uid :string  ,guid :string  ,log :string ):void{
		this._stream.reset();
		this._stream.optcode = 5;
		this._stream.writeUint16( 5 );
			//����
		this._stream.writeUint32 (type);		
			//uid
		this._stream.writeString (uid);		
			//guid
		this._stream.writeString (guid);		
			//����
		this._stream.writeString (log);		
		this._send_func(this._stream);			
	}
	public sync_mstime ( mstime_now :number  ,time_now :number  ,open_time :number ):void{
		this._stream.reset();
		this._stream.optcode = 7;
		this._stream.writeUint16( 7 );
			//���������еĺ�����
		this._stream.writeUint32 (mstime_now);		
			//��Ȼʱ��
		this._stream.writeUint32 (time_now);		
			//��Ȼʱ��ķ���������ʱ��
		this._stream.writeUint32 (open_time);		
		this._send_func(this._stream);			
	}
	public ud_control ():void{
		this._stream.reset();
		this._stream.optcode = 9;
		this._stream.writeUint16( 9 );
		this._send_func(this._stream);			
	}
	public get_chars_list ():void{
		this._stream.reset();
		this._stream.optcode = 15;
		this._stream.writeUint16( 15 );
		this._send_func(this._stream);			
	}
	public check_name ( name :string ):void{
		this._stream.reset();
		this._stream.optcode = 17;
		this._stream.writeUint16( 17 );
			//����
		this._stream.writeString (name);		
		this._send_func(this._stream);			
	}
	public char_create ( info :char_create_info  ):void{
		this._stream.reset();
		this._stream.optcode = 19;
		this._stream.writeUint16( 19 );
			//��ɫ������Ϣ
		info .write(this._stream);
		this._send_func(this._stream);			
	}
	public delete_char ( id :number ):void{
		this._stream.reset();
		this._stream.optcode = 21;
		this._stream.writeUint16( 21 );
			//���ID
		this._stream.writeUint32 (id);		
		this._send_func(this._stream);			
	}
	public player_login ( guid :string ):void{
		this._stream.reset();
		this._stream.optcode = 23;
		this._stream.writeUint16( 23 );
			//���ID
		this._stream.writeString (guid);		
		this._send_func(this._stream);			
	}
	public player_logout ():void{
		this._stream.reset();
		this._stream.optcode = 24;
		this._stream.writeUint16( 24 );
		this._send_func(this._stream);			
	}
	public regularise_account ( uid :string ):void{
		this._stream.reset();
		this._stream.optcode = 25;
		this._stream.writeUint16( 25 );
			//
		this._stream.writeString (uid);		
		this._send_func(this._stream);			
	}
	public char_remotestore ( key :number  ,value :number ):void{
		this._stream.reset();
		this._stream.optcode = 26;
		this._stream.writeUint16( 26 );
			//����
		this._stream.writeUint32 (key);		
			//������Ϣ
		this._stream.writeUint32 (value);		
		this._send_func(this._stream);			
	}
	public char_remotestore_str ( key :number  ,value :string ):void{
		this._stream.reset();
		this._stream.optcode = 27;
		this._stream.writeUint16( 27 );
			//����
		this._stream.writeUint32 (key);		
			//������Ϣ
		this._stream.writeString (value);		
		this._send_func(this._stream);			
	}
	public teleport ( intGuid :number ):void{
		this._stream.reset();
		this._stream.optcode = 28;
		this._stream.writeUint16( 28 );
			//���͵�intGuid
		this._stream.writeUint32 (intGuid);		
		this._send_func(this._stream);			
	}
	public move_stop ( guid :number  ,pos_x :number  ,pos_y :number ):void{
		this._stream.reset();
		this._stream.optcode = 29;
		this._stream.writeUint16( 29 );
			//���GUID
		this._stream.writeUint32 (guid);		
			//
		this._stream.writeUint16 (pos_x);		
			//
		this._stream.writeUint16 (pos_y);		
		this._send_func(this._stream);			
	}
	public unit_move ( guid :number  ,pos_x :number  ,pos_y :number  ,path : Array< number >):void{
		this._stream.reset();
		this._stream.optcode = 30;
		this._stream.writeUint16( 30 );
			//����GUID
		this._stream.writeUint32 (guid);		
			//
		this._stream.writeUint16 (pos_x);		
			//
		this._stream.writeUint16 (pos_y);		
			//·��
		this._stream.writeUint16(path .length);
		for(var i:number=0;i<path .length;i++){
			this._stream.writeInt8 (path [i]);
		}		
		this._send_func(this._stream);			
	}
	public use_gameobject ( target :number ):void{
		this._stream.reset();
		this._stream.optcode = 31;
		this._stream.writeUint16( 31 );
			//Ŀ��
		this._stream.writeUint32 (target);		
		this._send_func(this._stream);			
	}
	public bag_exchange_pos ( src_bag :number  ,src_pos :number  ,dst_bag :number  ,dst_pos :number ):void{
		this._stream.reset();
		this._stream.optcode = 32;
		this._stream.writeUint16( 32 );
			//Դ����
		this._stream.writeUint32 (src_bag);		
			//Դλ��
		this._stream.writeUint32 (src_pos);		
			//Ŀ�����
		this._stream.writeUint32 (dst_bag);		
			//Ŀ��λ��
		this._stream.writeUint32 (dst_pos);		
		this._send_func(this._stream);			
	}
	public bag_destroy ( item_guid :string  ,num :number  ,bag_id :number ):void{
		this._stream.reset();
		this._stream.optcode = 33;
		this._stream.writeUint16( 33 );
			//��Ʒguid
		this._stream.writeString (item_guid);		
			//������Ԥ����
		this._stream.writeUint32 (num);		
			//����ID
		this._stream.writeUint32 (bag_id);		
		this._send_func(this._stream);			
	}
	public bag_item_split ( bag_id :number  ,src_pos :number  ,count :number  ,dst_pos :number  ,dst_bag :number ):void{
		this._stream.reset();
		this._stream.optcode = 34;
		this._stream.writeUint16( 34 );
			//����ID
		this._stream.writeUint8 (bag_id);		
			//�и��ĸ�λ����Ʒ
		this._stream.writeUint16 (src_pos);		
			//�и���ٳ�ȥ
		this._stream.writeUint32 (count);		
			//�иʲôλ��
		this._stream.writeUint16 (dst_pos);		
			//�иʲô����
		this._stream.writeUint8 (dst_bag);		
		this._send_func(this._stream);			
	}
	public bag_item_user ( item_guid :string  ,count :number ):void{
		this._stream.reset();
		this._stream.optcode = 35;
		this._stream.writeUint16( 35 );
			//��Ʒguid
		this._stream.writeString (item_guid);		
			//����
		this._stream.writeUint32 (count);		
		this._send_func(this._stream);			
	}
	public exchange_item ( entry :number  ,count :number  ,tar_entry :number ):void{
		this._stream.reset();
		this._stream.optcode = 39;
		this._stream.writeUint16( 39 );
			//��Ʒģ��
		this._stream.writeUint32 (entry);		
			//�һ�����
		this._stream.writeUint32 (count);		
			//�һ���Ʒģ��
		this._stream.writeUint32 (tar_entry);		
		this._send_func(this._stream);			
	}
	public bag_extension ( bag_id :number  ,extension_type :number  ,bag_pos :number ):void{
		this._stream.reset();
		this._stream.optcode = 40;
		this._stream.writeUint16( 40 );
			//����
		this._stream.writeUint8 (bag_id);		
			//��չ����
		this._stream.writeUint8 (extension_type);		
			//����λ��
		this._stream.writeUint32 (bag_pos);		
		this._send_func(this._stream);			
	}
	public npc_get_goods_list ( npc_id :number ):void{
		this._stream.reset();
		this._stream.optcode = 41;
		this._stream.writeUint16( 41 );
			//
		this._stream.writeUint32 (npc_id);		
		this._send_func(this._stream);			
	}
	public store_buy ( id :number  ,count :number ):void{
		this._stream.reset();
		this._stream.optcode = 43;
		this._stream.writeUint16( 43 );
			//��Ʒid
		this._stream.writeUint32 (id);		
			//��Ʒ����
		this._stream.writeUint32 (count);		
		this._send_func(this._stream);			
	}
	public npc_sell ( npc_id :number  ,item_guid :string  ,num :number ):void{
		this._stream.reset();
		this._stream.optcode = 44;
		this._stream.writeUint16( 44 );
			//NPCID
		this._stream.writeUint32 (npc_id);		
			//��Ʒguid
		this._stream.writeString (item_guid);		
			//����
		this._stream.writeUint32 (num);		
		this._send_func(this._stream);			
	}
	public npc_repurchase ( item_id :string ):void{
		this._stream.reset();
		this._stream.optcode = 45;
		this._stream.writeUint16( 45 );
			//��Ʒguid
		this._stream.writeString (item_id);		
		this._send_func(this._stream);			
	}
	public avatar_fashion_enable ( pos :number ):void{
		this._stream.reset();
		this._stream.optcode = 46;
		this._stream.writeUint16( 46 );
			//ʱװװ��λ��
		this._stream.writeUint8 (pos);		
		this._send_func(this._stream);			
	}
	public questhelp_talk_option ( quest_id :number  ,option_id :number  ,value0 :number  ,value1 :number ):void{
		this._stream.reset();
		this._stream.optcode = 47;
		this._stream.writeUint16( 47 );
			//����ID
		this._stream.writeUint32 (quest_id);		
			//ѡ��ID
		this._stream.writeUint32 (option_id);		
			//
		this._stream.writeInt32 (value0);		
			//
		this._stream.writeInt32 (value1);		
		this._send_func(this._stream);			
	}
	public taxi_hello ( guid :number ):void{
		this._stream.reset();
		this._stream.optcode = 48;
		this._stream.writeUint16( 48 );
			//npc guid
		this._stream.writeUint32 (guid);		
		this._send_func(this._stream);			
	}
	public taxi_select_station ( station_id :number  ,guid :number ):void{
		this._stream.reset();
		this._stream.optcode = 50;
		this._stream.writeUint16( 50 );
			//
		this._stream.writeUint32 (station_id);		
			//
		this._stream.writeUint32 (guid);		
		this._send_func(this._stream);			
	}
	public gossip_select_option ( option :number  ,guid :number  ,unknow :string ):void{
		this._stream.reset();
		this._stream.optcode = 51;
		this._stream.writeUint16( 51 );
			//ѡ��ID
		this._stream.writeUint32 (option);		
			//NPCguid
		this._stream.writeUint32 (guid);		
			//����ֵ
		this._stream.writeString (unknow);		
		this._send_func(this._stream);			
	}
	public gossip_hello ( guid :number ):void{
		this._stream.reset();
		this._stream.optcode = 52;
		this._stream.writeUint16( 52 );
			//����Ŀ��
		this._stream.writeUint32 (guid);		
		this._send_func(this._stream);			
	}
	public questgiver_status_query ( guid :number ):void{
		this._stream.reset();
		this._stream.optcode = 54;
		this._stream.writeUint16( 54 );
			//NPC GUID
		this._stream.writeUint32 (guid);		
		this._send_func(this._stream);			
	}
	public query_quest_status ( quest_array : Array< quest_status  >):void{
		this._stream.reset();
		this._stream.optcode = 56;
		this._stream.writeUint16( 56 );
			//
		this._stream.writeUint16(quest_array .length);
		for(var i:number=0;i<quest_array .length;i++){
			quest_array [i].write(this._stream);
		}
		this._send_func(this._stream);			
	}
	public questhelp_get_canaccept_list ():void{
		this._stream.reset();
		this._stream.optcode = 57;
		this._stream.writeUint16( 57 );
		this._send_func(this._stream);			
	}
	public questlog_remove_quest ( slot :number  ,reserve :number ):void{
		this._stream.reset();
		this._stream.optcode = 61;
		this._stream.writeUint16( 61 );
			//�����±�λ��
		this._stream.writeUint8 (slot);		
			//����
		this._stream.writeUint64 (reserve);		
		this._send_func(this._stream);			
	}
	public questgiver_complete_quest ( guid :number  ,quest_id :number  ,reward :number ):void{
		this._stream.reset();
		this._stream.optcode = 62;
		this._stream.writeUint16( 62 );
			//NPC_GUID
		this._stream.writeUint32 (guid);		
			//����ID
		this._stream.writeUint32 (quest_id);		
			//ѡ������
		this._stream.writeUint8 (reward);		
		this._send_func(this._stream);			
	}
	public questhelp_complete ( quest_id :number  ,quest_statue :number  ,reserve :number ):void{
		this._stream.reset();
		this._stream.optcode = 64;
		this._stream.writeUint16( 64 );
			//����ID
		this._stream.writeUint32 (quest_id);		
			//����
		this._stream.writeUint8 (quest_statue);		
			//����
		this._stream.writeUint8 (reserve);		
		this._send_func(this._stream);			
	}
	public questhelp_update_status ( quest_id :number  ,slot_id :number  ,num :number ):void{
		this._stream.reset();
		this._stream.optcode = 66;
		this._stream.writeUint16( 66 );
			//����ID
		this._stream.writeUint32 (quest_id);		
			//�±�ID
		this._stream.writeUint32 (slot_id);		
			//��������
		this._stream.writeUint32 (num);		
		this._send_func(this._stream);			
	}
	public questgiver_accept_quest ( npcid :number  ,quest_id :number ):void{
		this._stream.reset();
		this._stream.optcode = 68;
		this._stream.writeUint16( 68 );
			//npcGUID
		this._stream.writeUint32 (npcid);		
			//
		this._stream.writeUint32 (quest_id);		
		this._send_func(this._stream);			
	}
	public questupdate_use_item ( item_id :number ):void{
		this._stream.reset();
		this._stream.optcode = 69;
		this._stream.writeUint16( 69 );
			//������ƷID
		this._stream.writeUint32 (item_id);		
		this._send_func(this._stream);			
	}
	public questhelp_query_book ( dynasty :number ):void{
		this._stream.reset();
		this._stream.optcode = 70;
		this._stream.writeUint16( 70 );
			//����
		this._stream.writeUint32 (dynasty);		
		this._send_func(this._stream);			
	}
	public set_attack_mode ( mode :number  ,reserve :number ):void{
		this._stream.reset();
		this._stream.optcode = 73;
		this._stream.writeUint16( 73 );
			//ģʽ
		this._stream.writeUint8 (mode);		
			//����
		this._stream.writeUint64 (reserve);		
		this._send_func(this._stream);			
	}
	public select_target ( id :number ):void{
		this._stream.reset();
		this._stream.optcode = 74;
		this._stream.writeUint16( 74 );
			//Ŀ��GUID
		this._stream.writeUint32 (id);		
		this._send_func(this._stream);			
	}
	public spell_start ( spell_id :number  ,target_pos_x :number  ,target_pos_y :number  ,caster :number  ,target :number ):void{
		this._stream.reset();
		this._stream.optcode = 77;
		this._stream.writeUint16( 77 );
			//����ID
		this._stream.writeUint32 (spell_id);		
			//
		this._stream.writeUint16 (target_pos_x);		
			//
		this._stream.writeUint16 (target_pos_y);		
			//
		this._stream.writeUint32 (caster);		
			//Ŀ��
		this._stream.writeUint32 (target);		
		this._send_func(this._stream);			
	}
	public spell_stop ( guid :string ):void{
		this._stream.reset();
		this._stream.optcode = 78;
		this._stream.writeUint16( 78 );
			//ֹͣʩ����
		this._stream.writeString (guid);		
		this._send_func(this._stream);			
	}
	public jump ( guid :number  ,pos_x :number  ,pos_y :number ):void{
		this._stream.reset();
		this._stream.optcode = 79;
		this._stream.writeUint16( 79 );
			//���Ķ���
		this._stream.writeUint32 (guid);		
			//Ŀ�ĵ�����
		this._stream.writeFloat (pos_x);		
			//
		this._stream.writeFloat (pos_y);		
		this._send_func(this._stream);			
	}
	public resurrection ( type :number  ,reserve :number ):void{
		this._stream.reset();
		this._stream.optcode = 80;
		this._stream.writeUint16( 80 );
			//0:ԭ�ظ��� 1:�سǸ���
		this._stream.writeUint8 (type);		
			//����
		this._stream.writeUint64 (reserve);		
		this._send_func(this._stream);			
	}
	public trade_request ( guid :string ):void{
		this._stream.reset();
		this._stream.optcode = 81;
		this._stream.writeUint16( 81 );
			//��������guid
		this._stream.writeString (guid);		
		this._send_func(this._stream);			
	}
	public trade_reply ( guid :string  ,reply :number ):void{
		this._stream.reset();
		this._stream.optcode = 82;
		this._stream.writeUint16( 82 );
			//�����׵���guid
		this._stream.writeString (guid);		
			//0:�ܾ�1:����
		this._stream.writeUint8 (reply);		
		this._send_func(this._stream);			
	}
	public trade_decide_items ( items : Array< string > ,gold_ingot :number  ,silver :number ):void{
		this._stream.reset();
		this._stream.optcode = 84;
		this._stream.writeUint16( 84 );
			//ȷ�Ͻ��׵���Ʒ
		if(items .length > 1000)
			throw("StringArray::length max 1000");
		this._stream.writeUint16(items .length);
		for(var i:number=0;i<items .length;i++){
			this._stream.writeString (items [i]);
		}		
			//Ԫ��
		this._stream.writeInt32 (gold_ingot);		
			//����
		this._stream.writeInt32 (silver);		
		this._send_func(this._stream);			
	}
	public trade_cancel ():void{
		this._stream.reset();
		this._stream.optcode = 86;
		this._stream.writeUint16( 86 );
		this._send_func(this._stream);			
	}
	public trade_ready ():void{
		this._stream.reset();
		this._stream.optcode = 87;
		this._stream.writeUint16( 87 );
		this._send_func(this._stream);			
	}
	public chat_near ( content :string ):void{
		this._stream.reset();
		this._stream.optcode = 89;
		this._stream.writeUint16( 89 );
			//��������
		this._stream.writeString (content);		
		this._send_func(this._stream);			
	}
	public chat_whisper ( guid :string  ,content :string ):void{
		this._stream.reset();
		this._stream.optcode = 90;
		this._stream.writeUint16( 90 );
			//���id
		this._stream.writeString (guid);		
			//˵������
		this._stream.writeString (content);		
		this._send_func(this._stream);			
	}
	public chat_faction ( guid :string  ,name :string  ,content :string  ,faction :number ):void{
		this._stream.reset();
		this._stream.optcode = 91;
		this._stream.writeUint16( 91 );
			//���id
		this._stream.writeString (guid);		
			//�������
		this._stream.writeString (name);		
			//˵������
		this._stream.writeString (content);		
			//�����Ӫ
		this._stream.writeUint8 (faction);		
		this._send_func(this._stream);			
	}
	public chat_world ( guid :string  ,faction :number  ,name :string  ,content :string ):void{
		this._stream.reset();
		this._stream.optcode = 92;
		this._stream.writeUint16( 92 );
			//���guid
		this._stream.writeString (guid);		
			//�����Ӫ
		this._stream.writeUint8 (faction);		
			//�������
		this._stream.writeString (name);		
			//˵������
		this._stream.writeString (content);		
		this._send_func(this._stream);			
	}
	public chat_horn ( guid :string  ,faction :number  ,name :string  ,content :string ):void{
		this._stream.reset();
		this._stream.optcode = 93;
		this._stream.writeUint16( 93 );
			//���guid
		this._stream.writeString (guid);		
			//�����Ӫ
		this._stream.writeUint8 (faction);		
			//�������
		this._stream.writeString (name);		
			//˵������
		this._stream.writeString (content);		
		this._send_func(this._stream);			
	}
	public chat_notice ( id :number  ,content :string  ,data :string ):void{
		this._stream.reset();
		this._stream.optcode = 94;
		this._stream.writeUint16( 94 );
			//����id
		this._stream.writeUint32 (id);		
			//��������
		this._stream.writeString (content);		
			//Ԥ������
		this._stream.writeString (data);		
		this._send_func(this._stream);			
	}
	public query_player_info ( guid :string  ,flag :number  ,callback_id :number ):void{
		this._stream.reset();
		this._stream.optcode = 95;
		this._stream.writeUint16( 95 );
			//���guid
		this._stream.writeString (guid);		
			//ÿһλ��ʾ��Ҹ�����Ϣ
		this._stream.writeUint32 (flag);		
			//�ص�ID
		this._stream.writeUint32 (callback_id);		
		this._send_func(this._stream);			
	}
	public receive_gift_packs ():void{
		this._stream.reset();
		this._stream.optcode = 97;
		this._stream.writeUint16( 97 );
		this._send_func(this._stream);			
	}
	public instance_enter ( instance_id :number ):void{
		this._stream.reset();
		this._stream.optcode = 101;
		this._stream.writeUint16( 101 );
			//����ID
		this._stream.writeUint32 (instance_id);		
		this._send_func(this._stream);			
	}
	public instance_next_state ( level :number  ,param :number ):void{
		this._stream.reset();
		this._stream.optcode = 102;
		this._stream.writeUint16( 102 );
			//����ؿ�
		this._stream.writeUint16 (level);		
			//Ԥ������
		this._stream.writeUint32 (param);		
		this._send_func(this._stream);			
	}
	public instance_exit ( reserve :number ):void{
		this._stream.reset();
		this._stream.optcode = 103;
		this._stream.writeUint16( 103 );
			//����
		this._stream.writeUint32 (reserve);		
		this._send_func(this._stream);			
	}
	public limit_activity_receive ( id :number  ,type :number ):void{
		this._stream.reset();
		this._stream.optcode = 104;
		this._stream.writeUint16( 104 );
			//��ȡid
		this._stream.writeUint32 (id);		
			//��ȡ����
		this._stream.writeUint32 (type);		
		this._send_func(this._stream);			
	}
	public warehouse_save_money ( money :number  ,money_gold :number  ,money_bills :number ):void{
		this._stream.reset();
		this._stream.optcode = 107;
		this._stream.writeUint16( 107 );
			//����Ǯ
		this._stream.writeInt32 (money);		
			//����Ԫ��
		this._stream.writeInt32 (money_gold);		
			//������Ʊ
		this._stream.writeInt32 (money_bills);		
		this._send_func(this._stream);			
	}
	public warehouse_take_money ( money :number  ,money_gold :number  ,money_bills :number ):void{
		this._stream.reset();
		this._stream.optcode = 108;
		this._stream.writeUint16( 108 );
			//����Ǯ
		this._stream.writeInt32 (money);		
			//����Ԫ��
		this._stream.writeInt32 (money_gold);		
			//������Ʊ
		this._stream.writeInt32 (money_bills);		
		this._send_func(this._stream);			
	}
	public use_gold_opt ( type :number  ,param :string ):void{
		this._stream.reset();
		this._stream.optcode = 109;
		this._stream.writeUint16( 109 );
			//��������
		this._stream.writeUint8 (type);		
			//�ַ���
		this._stream.writeString (param);		
		this._send_func(this._stream);			
	}
	public use_silver_opt ( type :number ):void{
		this._stream.reset();
		this._stream.optcode = 110;
		this._stream.writeUint16( 110 );
			//ʹ��ͭǮ����
		this._stream.writeUint8 (type);		
		this._send_func(this._stream);			
	}
	public sync_mstime_app ( mstime_now :number  ,time_now :number  ,open_time :number ):void{
		this._stream.reset();
		this._stream.optcode = 113;
		this._stream.writeUint16( 113 );
			//���������еĺ�����
		this._stream.writeUint32 (mstime_now);		
			//��Ȼʱ��
		this._stream.writeUint32 (time_now);		
			//��Ȼʱ��ķ���������ʱ��
		this._stream.writeUint32 (open_time);		
		this._send_func(this._stream);			
	}
	public open_window ( window_type :number ):void{
		this._stream.reset();
		this._stream.optcode = 114;
		this._stream.writeUint16( 114 );
			//��������
		this._stream.writeUint32 (window_type);		
		this._send_func(this._stream);			
	}
	public player_gag ( player_id :string  ,end_time :number  ,content :string ):void{
		this._stream.reset();
		this._stream.optcode = 115;
		this._stream.writeUint16( 115 );
			//���ID
		this._stream.writeString (player_id);		
			//����ʱ��
		this._stream.writeUint32 (end_time);		
			//��������
		this._stream.writeString (content);		
		this._send_func(this._stream);			
	}
	public player_kicking ( player_id :string ):void{
		this._stream.reset();
		this._stream.optcode = 116;
		this._stream.writeUint16( 116 );
			//���ID
		this._stream.writeString (player_id);		
		this._send_func(this._stream);			
	}
	public rank_list_query ( call_back_id :number  ,rank_list_type :number  ,start_index :number  ,end_index :number ):void{
		this._stream.reset();
		this._stream.optcode = 118;
		this._stream.writeUint16( 118 );
			//�ص���
		this._stream.writeUint32 (call_back_id);		
			//��������
		this._stream.writeUint8 (rank_list_type);		
			//��ʼ
		this._stream.writeUint16 (start_index);		
			//����
		this._stream.writeUint16 (end_index);		
		this._send_func(this._stream);			
	}
	public client_update_scened ():void{
		this._stream.reset();
		this._stream.optcode = 120;
		this._stream.writeUint16( 120 );
		this._send_func(this._stream);			
	}
	public loot_select ( x :number  ,y :number ):void{
		this._stream.reset();
		this._stream.optcode = 122;
		this._stream.writeUint16( 122 );
			//x
		this._stream.writeUint16 (x);		
			//y
		this._stream.writeUint16 (y);		
		this._send_func(this._stream);			
	}
	public goback_to_game_server ():void{
		this._stream.reset();
		this._stream.optcode = 123;
		this._stream.writeUint16( 123 );
		this._send_func(this._stream);			
	}
	public world_war_CS_player_info ():void{
		this._stream.reset();
		this._stream.optcode = 124;
		this._stream.writeUint16( 124 );
		this._send_func(this._stream);			
	}
	public world_war_SC_player_info ():void{
		this._stream.reset();
		this._stream.optcode = 126;
		this._stream.writeUint16( 126 );
		this._send_func(this._stream);			
	}
	public clientSubscription ( guid :number ):void{
		this._stream.reset();
		this._stream.optcode = 127;
		this._stream.writeUint16( 127 );
			//���guid
		this._stream.writeUint32 (guid);		
		this._send_func(this._stream);			
	}
	public char_update_info ( info :char_create_info  ):void{
		this._stream.reset();
		this._stream.optcode = 129;
		this._stream.writeUint16( 129 );
			//��ɫ������Ϣ
		info .write(this._stream);
		this._send_func(this._stream);			
	}
	public modify_watch ( opt :number  ,cid :number  ,key :string ):void{
		this._stream.reset();
		this._stream.optcode = 131;
		this._stream.writeUint16( 131 );
			//��������
		this._stream.writeUint8 (opt);		
			//�޸Ķ�����
		this._stream.writeUint32 (cid);		
			//����key
		this._stream.writeString (key);		
		this._send_func(this._stream);			
	}
	public kuafu_chuansong ( str_data :string  ,watcher_guid :string  ,reserve :number ):void{
		this._stream.reset();
		this._stream.optcode = 132;
		this._stream.writeUint16( 132 );
			//ս����Ϣ
		this._stream.writeString (str_data);		
			//�۲���guid
		this._stream.writeString (watcher_guid);		
			//Ԥ������
		this._stream.writeUint32 (reserve);		
		this._send_func(this._stream);			
	}
	public show_suit ( position :number ):void{
		this._stream.reset();
		this._stream.optcode = 133;
		this._stream.writeUint16( 133 );
			//������λ��
		this._stream.writeUint8 (position);		
		this._send_func(this._stream);			
	}
	public show_position ( channel :number ):void{
		this._stream.reset();
		this._stream.optcode = 134;
		this._stream.writeUint16( 134 );
			//Ƶ��id
		this._stream.writeUint8 (channel);		
		this._send_func(this._stream);			
	}
	public gold_respawn ( useGold :number ):void{
		this._stream.reset();
		this._stream.optcode = 135;
		this._stream.writeUint16( 135 );
			//�Ƿ�ʹ��Ԫ��
		this._stream.writeUint8 (useGold);		
		this._send_func(this._stream);			
	}
	public mall_buy ( id :number  ,count :number  ,time :number ):void{
		this._stream.reset();
		this._stream.optcode = 137;
		this._stream.writeUint16( 137 );
			//��Ʒ���к�
		this._stream.writeUint32 (id);		
			//��Ʒ����
		this._stream.writeUint32 (count);		
			//ʱЧID
		this._stream.writeUint32 (time);		
		this._send_func(this._stream);			
	}
	public strength ( part :number ):void{
		this._stream.reset();
		this._stream.optcode = 139;
		this._stream.writeUint16( 139 );
			//ǿ����λ��
		this._stream.writeUint8 (part);		
		this._send_func(this._stream);			
	}
	public forceInto ():void{
		this._stream.reset();
		this._stream.optcode = 141;
		this._stream.writeUint16( 141 );
		this._send_func(this._stream);			
	}
	public create_faction ( name :string  ,icon :number ):void{
		this._stream.reset();
		this._stream.optcode = 142;
		this._stream.writeUint16( 142 );
			//��������
		this._stream.writeString (name);		
			//icon
		this._stream.writeUint8 (icon);		
		this._send_func(this._stream);			
	}
	public faction_upgrade ():void{
		this._stream.reset();
		this._stream.optcode = 143;
		this._stream.writeUint16( 143 );
		this._send_func(this._stream);			
	}
	public faction_join ( id :string ):void{
		this._stream.reset();
		this._stream.optcode = 144;
		this._stream.writeUint16( 144 );
			//����guid
		this._stream.writeString (id);		
		this._send_func(this._stream);			
	}
	public raise_base_spell ( raiseType :number  ,spellId :number ):void{
		this._stream.reset();
		this._stream.optcode = 145;
		this._stream.writeUint16( 145 );
			//��������
		this._stream.writeUint8 (raiseType);		
			//����ID
		this._stream.writeUint16 (spellId);		
		this._send_func(this._stream);			
	}
	public upgrade_anger_spell ( spellId :number ):void{
		this._stream.reset();
		this._stream.optcode = 146;
		this._stream.writeUint16( 146 );
			//����ID
		this._stream.writeUint16 (spellId);		
		this._send_func(this._stream);			
	}
	public raise_mount ():void{
		this._stream.reset();
		this._stream.optcode = 147;
		this._stream.writeUint16( 147 );
		this._send_func(this._stream);			
	}
	public upgrade_mount ( useItem :number ):void{
		this._stream.reset();
		this._stream.optcode = 148;
		this._stream.writeUint16( 148 );
			//�Ƿ��Զ�ʹ�õ���
		this._stream.writeUint8 (useItem);		
		this._send_func(this._stream);			
	}
	public upgrade_mount_one_step ( useItem :number ):void{
		this._stream.reset();
		this._stream.optcode = 149;
		this._stream.writeUint16( 149 );
			//�Ƿ��Զ�ʹ�õ���
		this._stream.writeUint8 (useItem);		
		this._send_func(this._stream);			
	}
	public illusion_mount_active ( illuId :number ):void{
		this._stream.reset();
		this._stream.optcode = 150;
		this._stream.writeUint16( 150 );
			//�û�����ID
		this._stream.writeUint16 (illuId);		
		this._send_func(this._stream);			
	}
	public illusion_mount ( illuId :number ):void{
		this._stream.reset();
		this._stream.optcode = 151;
		this._stream.writeUint16( 151 );
			//�û�����ID
		this._stream.writeUint16 (illuId);		
		this._send_func(this._stream);			
	}
	public ride_mount ():void{
		this._stream.reset();
		this._stream.optcode = 152;
		this._stream.writeUint16( 152 );
		this._send_func(this._stream);			
	}
	public gem ( part :number ):void{
		this._stream.reset();
		this._stream.optcode = 154;
		this._stream.writeUint16( 154 );
			//��ʯλ��
		this._stream.writeUint8 (part);		
		this._send_func(this._stream);			
	}
	public change_battle_mode ( mode :number ):void{
		this._stream.reset();
		this._stream.optcode = 155;
		this._stream.writeUint16( 155 );
			//��Ҫ�л���ģʽ
		this._stream.writeUint8 (mode);		
		this._send_func(this._stream);			
	}
	public divine_active ( id :number ):void{
		this._stream.reset();
		this._stream.optcode = 157;
		this._stream.writeUint16( 157 );
			//���ID
		this._stream.writeUint8 (id);		
		this._send_func(this._stream);			
	}
	public divine_uplev ( id :number ):void{
		this._stream.reset();
		this._stream.optcode = 158;
		this._stream.writeUint16( 158 );
			//���ID
		this._stream.writeUint8 (id);		
		this._send_func(this._stream);			
	}
	public divine_switch ( id :number ):void{
		this._stream.reset();
		this._stream.optcode = 159;
		this._stream.writeUint16( 159 );
			//���ID
		this._stream.writeUint8 (id);		
		this._send_func(this._stream);			
	}
	public jump_start ( pos_x :number  ,pos_y :number ):void{
		this._stream.reset();
		this._stream.optcode = 160;
		this._stream.writeUint16( 160 );
			//����x
		this._stream.writeUint16 (pos_x);		
			//����x
		this._stream.writeUint16 (pos_y);		
		this._send_func(this._stream);			
	}
	public enter_vip_instance ( id :number  ,hard :number ):void{
		this._stream.reset();
		this._stream.optcode = 161;
		this._stream.writeUint16( 161 );
			//vip�������id
		this._stream.writeUint16 (id);		
			//vip�����Ѷ�
		this._stream.writeUint8 (hard);		
		this._send_func(this._stream);			
	}
	public sweep_vip_instance ( id :number ):void{
		this._stream.reset();
		this._stream.optcode = 162;
		this._stream.writeUint16( 162 );
			//vip�������id
		this._stream.writeUint16 (id);		
		this._send_func(this._stream);			
	}
	public hang_up ():void{
		this._stream.reset();
		this._stream.optcode = 163;
		this._stream.writeUint16( 163 );
		this._send_func(this._stream);			
	}
	public hang_up_setting ( value0 :number  ,value1 :number  ,value2 :number  ,value3 :number ):void{
		this._stream.reset();
		this._stream.optcode = 164;
		this._stream.writeUint16( 164 );
			//ͬPLAYER_FIELD_HOOK_BYTE0
		this._stream.writeUint32 (value0);		
			//ͬPLAYER_FIELD_HOOK_BYTE1
		this._stream.writeUint32 (value1);		
			//ͬPLAYER_FIELD_HOOK_BYTE2
		this._stream.writeUint32 (value2);		
			//ͬPLAYER_FIELD_HOOK_BYTE3
		this._stream.writeUint32 (value3);		
		this._send_func(this._stream);			
	}
	public enter_trial_instance ():void{
		this._stream.reset();
		this._stream.optcode = 165;
		this._stream.writeUint16( 165 );
		this._send_func(this._stream);			
	}
	public sweep_trial_instance ():void{
		this._stream.reset();
		this._stream.optcode = 166;
		this._stream.writeUint16( 166 );
		this._send_func(this._stream);			
	}
	public reset_trial_instance ():void{
		this._stream.reset();
		this._stream.optcode = 167;
		this._stream.writeUint16( 167 );
		this._send_func(this._stream);			
	}
	public reenter_instance ():void{
		this._stream.reset();
		this._stream.optcode = 169;
		this._stream.writeUint16( 169 );
		this._send_func(this._stream);			
	}
	public social_add_friend ( guid :string ):void{
		this._stream.reset();
		this._stream.optcode = 171;
		this._stream.writeUint16( 171 );
			//����GUID
		this._stream.writeString (guid);		
		this._send_func(this._stream);			
	}
	public social_sureadd_friend ( guid :string ):void{
		this._stream.reset();
		this._stream.optcode = 172;
		this._stream.writeUint16( 172 );
			//����GUID
		this._stream.writeString (guid);		
		this._send_func(this._stream);			
	}
	public social_gift_friend ( guid :string  ,gift : Array< item_reward_info  >):void{
		this._stream.reset();
		this._stream.optcode = 173;
		this._stream.writeUint16( 173 );
			//����GUID
		this._stream.writeString (guid);		
			//�����б�
		this._stream.writeUint16(gift .length);
		for(var i:number=0;i<gift .length;i++){
			gift [i].write(this._stream);
		}
		this._send_func(this._stream);			
	}
	public social_recommend_friend ():void{
		this._stream.reset();
		this._stream.optcode = 174;
		this._stream.writeUint16( 174 );
		this._send_func(this._stream);			
	}
	public social_revenge_enemy ( guid :string ):void{
		this._stream.reset();
		this._stream.optcode = 176;
		this._stream.writeUint16( 176 );
			//����GUID
		this._stream.writeString (guid);		
		this._send_func(this._stream);			
	}
	public social_del_friend ( guid :string ):void{
		this._stream.reset();
		this._stream.optcode = 177;
		this._stream.writeUint16( 177 );
			//����GUID
		this._stream.writeString (guid);		
		this._send_func(this._stream);			
	}
	public teleport_main_city ():void{
		this._stream.reset();
		this._stream.optcode = 178;
		this._stream.writeUint16( 178 );
		this._send_func(this._stream);			
	}
	public chat_by_channel ( channel :number  ,content :string ):void{
		this._stream.reset();
		this._stream.optcode = 179;
		this._stream.writeUint16( 179 );
			//����Ƶ��
		this._stream.writeUint8 (channel);		
			//˵������
		this._stream.writeString (content);		
		this._send_func(this._stream);			
	}
	public social_clear_apply ():void{
		this._stream.reset();
		this._stream.optcode = 181;
		this._stream.writeUint16( 181 );
		this._send_func(this._stream);			
	}
	public msg_decline ( value0 :number  ,value1 :number ):void{
		this._stream.reset();
		this._stream.optcode = 182;
		this._stream.writeUint16( 182 );
			//PLAYER_FIELD_DECLINE_CHANNEL_BYTE0
		this._stream.writeUint32 (value0);		
			//PLAYER_FIELD_DECLINE_CHANNEL_BYTE1
		this._stream.writeUint32 (value1);		
		this._send_func(this._stream);			
	}
	public faction_getlist ( page :number  ,num :number  ,grep :number ):void{
		this._stream.reset();
		this._stream.optcode = 184;
		this._stream.writeUint16( 184 );
			//��ǰҳ
		this._stream.writeUint8 (page);		
			//ÿҳ����
		this._stream.writeUint8 (num);		
			//�Զ�����
		this._stream.writeUint8 (grep);		
		this._send_func(this._stream);			
	}
	public faction_manager ( opt_type :number  ,reserve_int1 :number  ,reserve_int2 :number  ,reserve_str1 :string  ,reserve_str2 :string ):void{
		this._stream.reset();
		this._stream.optcode = 185;
		this._stream.writeUint16( 185 );
			//��������
		this._stream.writeUint8 (opt_type);		
			//Ԥ��intֵ1
		this._stream.writeUint16 (reserve_int1);		
			//Ԥ��intֵ2
		this._stream.writeUint16 (reserve_int2);		
			//Ԥ��stringֵ1
		this._stream.writeString (reserve_str1);		
			//Ԥ��stringֵ2
		this._stream.writeString (reserve_str2);		
		this._send_func(this._stream);			
	}
	public faction_member_operate ( opt_type :number  ,reserve_int1 :number  ,reserve_int2 :number  ,reserve_str1 :string  ,reserve_str2 :string ):void{
		this._stream.reset();
		this._stream.optcode = 186;
		this._stream.writeUint16( 186 );
			//��������
		this._stream.writeUint8 (opt_type);		
			//Ԥ��intֵ1
		this._stream.writeUint16 (reserve_int1);		
			//Ԥ��intֵ2
		this._stream.writeUint16 (reserve_int2);		
			//Ԥ��stringֵ1
		this._stream.writeString (reserve_str1);		
			//Ԥ��stringֵ2
		this._stream.writeString (reserve_str2);		
		this._send_func(this._stream);			
	}
	public faction_fast_join ():void{
		this._stream.reset();
		this._stream.optcode = 187;
		this._stream.writeUint16( 187 );
		this._send_func(this._stream);			
	}
	public social_add_friend_byname ( name :string ):void{
		this._stream.reset();
		this._stream.optcode = 188;
		this._stream.writeUint16( 188 );
			//����name
		this._stream.writeString (name);		
		this._send_func(this._stream);			
	}
	public read_mail ( indx :number ):void{
		this._stream.reset();
		this._stream.optcode = 190;
		this._stream.writeUint16( 190 );
			//�ʼ�����
		this._stream.writeUint16 (indx);		
		this._send_func(this._stream);			
	}
	public pick_mail ( indx :number ):void{
		this._stream.reset();
		this._stream.optcode = 191;
		this._stream.writeUint16( 191 );
			//�ʼ�����
		this._stream.writeUint16 (indx);		
		this._send_func(this._stream);			
	}
	public remove_mail ( indx :number ):void{
		this._stream.reset();
		this._stream.optcode = 192;
		this._stream.writeUint16( 192 );
			//�ʼ�����
		this._stream.writeUint16 (indx);		
		this._send_func(this._stream);			
	}
	public pick_mail_one_step ():void{
		this._stream.reset();
		this._stream.optcode = 193;
		this._stream.writeUint16( 193 );
		this._send_func(this._stream);			
	}
	public remove_mail_one_step ():void{
		this._stream.reset();
		this._stream.optcode = 194;
		this._stream.writeUint16( 194 );
		this._send_func(this._stream);			
	}
	public block_chat ( guid :string ):void{
		this._stream.reset();
		this._stream.optcode = 195;
		this._stream.writeUint16( 195 );
			//����guid
		this._stream.writeString (guid);		
		this._send_func(this._stream);			
	}
	public cancel_block_chat ( indx :number ):void{
		this._stream.reset();
		this._stream.optcode = 196;
		this._stream.writeUint16( 196 );
			//����
		this._stream.writeUint8 (indx);		
		this._send_func(this._stream);			
	}
	public use_broadcast_gameobject ( target :number ):void{
		this._stream.reset();
		this._stream.optcode = 200;
		this._stream.writeUint16( 200 );
			//gameobject uintguid
		this._stream.writeUint32 (target);		
		this._send_func(this._stream);			
	}
	public world_boss_enroll ():void{
		this._stream.reset();
		this._stream.optcode = 201;
		this._stream.writeUint16( 201 );
		this._send_func(this._stream);			
	}
	public world_boss_fight ():void{
		this._stream.reset();
		this._stream.optcode = 202;
		this._stream.writeUint16( 202 );
		this._send_func(this._stream);			
	}
	public change_line ( lineNo :number ):void{
		this._stream.reset();
		this._stream.optcode = 203;
		this._stream.writeUint16( 203 );
			//�ߺ�
		this._stream.writeUint32 (lineNo);		
		this._send_func(this._stream);			
	}
	public roll_world_boss_treasure ():void{
		this._stream.reset();
		this._stream.optcode = 204;
		this._stream.writeUint16( 204 );
		this._send_func(this._stream);			
	}
	public rank_add_like ( type :number  ,guid :string ):void{
		this._stream.reset();
		this._stream.optcode = 207;
		this._stream.writeUint16( 207 );
			//���а�����
		this._stream.writeUint8 (type);		
			//GUID
		this._stream.writeString (guid);		
		this._send_func(this._stream);			
	}
	public res_instance_enter ( id :number ):void{
		this._stream.reset();
		this._stream.optcode = 210;
		this._stream.writeUint16( 210 );
			//��������
		this._stream.writeUint8 (id);		
		this._send_func(this._stream);			
	}
	public res_instance_sweep ( id :number ):void{
		this._stream.reset();
		this._stream.optcode = 211;
		this._stream.writeUint16( 211 );
			//��������
		this._stream.writeUint8 (id);		
		this._send_func(this._stream);			
	}
	public show_map_line ():void{
		this._stream.reset();
		this._stream.optcode = 212;
		this._stream.writeUint16( 212 );
		this._send_func(this._stream);			
	}
	public teleport_map ( mapid :number  ,lineNo :number ):void{
		this._stream.reset();
		this._stream.optcode = 216;
		this._stream.writeUint16( 216 );
			//��ͼid
		this._stream.writeUint32 (mapid);		
			//���ߺ�
		this._stream.writeUint32 (lineNo);		
		this._send_func(this._stream);			
	}
	public teleport_field_boss ( mapid :number  ,lineNo :number ):void{
		this._stream.reset();
		this._stream.optcode = 217;
		this._stream.writeUint16( 217 );
			//��ͼid
		this._stream.writeUint32 (mapid);		
			//���ߺ�
		this._stream.writeUint32 (lineNo);		
		this._send_func(this._stream);			
	}
	public get_activity_reward ( id :number  ,vip :number ):void{
		this._stream.reset();
		this._stream.optcode = 218;
		this._stream.writeUint16( 218 );
			//������
		this._stream.writeUint8 (id);		
			//vip����
		this._stream.writeUint8 (vip);		
		this._send_func(this._stream);			
	}
	public get_achieve_reward ( id :number ):void{
		this._stream.reset();
		this._stream.optcode = 220;
		this._stream.writeUint16( 220 );
			//�ɾ����
		this._stream.writeUint8 (id);		
		this._send_func(this._stream);			
	}
	public get_achieve_all_reward ():void{
		this._stream.reset();
		this._stream.optcode = 221;
		this._stream.writeUint16( 221 );
		this._send_func(this._stream);			
	}
	public set_title ( id :number ):void{
		this._stream.reset();
		this._stream.optcode = 222;
		this._stream.writeUint16( 222 );
			//�ƺ����
		this._stream.writeUint8 (id);		
		this._send_func(this._stream);			
	}
	public init_title ( id :number ):void{
		this._stream.reset();
		this._stream.optcode = 223;
		this._stream.writeUint16( 223 );
			//�ƺ����
		this._stream.writeUint8 (id);		
		this._send_func(this._stream);			
	}
	public welfare_shouchong_reward ():void{
		this._stream.reset();
		this._stream.optcode = 224;
		this._stream.writeUint16( 224 );
		this._send_func(this._stream);			
	}
	public welfare_checkin ():void{
		this._stream.reset();
		this._stream.optcode = 225;
		this._stream.writeUint16( 225 );
		this._send_func(this._stream);			
	}
	public welfare_checkin_all ( id :number ):void{
		this._stream.reset();
		this._stream.optcode = 226;
		this._stream.writeUint16( 226 );
			//ǩ�����
		this._stream.writeUint8 (id);		
		this._send_func(this._stream);			
	}
	public welfare_checkin_getback ( id :number ):void{
		this._stream.reset();
		this._stream.optcode = 227;
		this._stream.writeUint16( 227 );
			//ǩ�����
		this._stream.writeUint8 (id);		
		this._send_func(this._stream);			
	}
	public welfare_level ( id :number ):void{
		this._stream.reset();
		this._stream.optcode = 228;
		this._stream.writeUint16( 228 );
			//�ȼ����
		this._stream.writeUint8 (id);		
		this._send_func(this._stream);			
	}
	public welfare_active_getback ( id :number  ,best :number  ,num :number ):void{
		this._stream.reset();
		this._stream.optcode = 229;
		this._stream.writeUint16( 229 );
			//�����
		this._stream.writeUint8 (id);		
			//�����һ�
		this._stream.writeUint8 (best);		
			//�һش���
		this._stream.writeUint16 (num);		
		this._send_func(this._stream);			
	}
	public pick_quest_reward ( indx :number ):void{
		this._stream.reset();
		this._stream.optcode = 230;
		this._stream.writeUint16( 230 );
			//�������
		this._stream.writeUint8 (indx);		
		this._send_func(this._stream);			
	}
	public talk_with_npc ( entry :number  ,questId :number ):void{
		this._stream.reset();
		this._stream.optcode = 231;
		this._stream.writeUint16( 231 );
			//npcid
		this._stream.writeUint16 (entry);		
			//����id
		this._stream.writeUint16 (questId);		
		this._send_func(this._stream);			
	}
	public use_virtual_item ( entry :number ):void{
		this._stream.reset();
		this._stream.optcode = 232;
		this._stream.writeUint16( 232 );
			//itemid
		this._stream.writeUint16 (entry);		
		this._send_func(this._stream);			
	}
	public pick_quest_chapter_reward ( indx :number ):void{
		this._stream.reset();
		this._stream.optcode = 233;
		this._stream.writeUint16( 233 );
			//�½�id
		this._stream.writeUint8 (indx);		
		this._send_func(this._stream);			
	}
	public kuafu_3v3_match ():void{
		this._stream.reset();
		this._stream.optcode = 234;
		this._stream.writeUint16( 234 );
		this._send_func(this._stream);			
	}
	public kuafu_3v3_buytimes ( num :number ):void{
		this._stream.reset();
		this._stream.optcode = 236;
		this._stream.writeUint16( 236 );
			//�������
		this._stream.writeUint8 (num);		
		this._send_func(this._stream);			
	}
	public kuafu_3v3_dayreward ( id :number ):void{
		this._stream.reset();
		this._stream.optcode = 237;
		this._stream.writeUint16( 237 );
			//�������
		this._stream.writeUint8 (id);		
		this._send_func(this._stream);			
	}
	public kuafu_3v3_getranlist ():void{
		this._stream.reset();
		this._stream.optcode = 238;
		this._stream.writeUint16( 238 );
		this._send_func(this._stream);			
	}
	public welfare_getalllist_getback ( best :number ):void{
		this._stream.reset();
		this._stream.optcode = 240;
		this._stream.writeUint16( 240 );
			//�����һ�
		this._stream.writeUint8 (best);		
		this._send_func(this._stream);			
	}
	public welfare_getall_getback ( best :number ):void{
		this._stream.reset();
		this._stream.optcode = 242;
		this._stream.writeUint16( 242 );
			//�����һ�
		this._stream.writeUint8 (best);		
		this._send_func(this._stream);			
	}
	public kuafu_3v3_getmyrank ():void{
		this._stream.reset();
		this._stream.optcode = 248;
		this._stream.writeUint16( 248 );
		this._send_func(this._stream);			
	}
	public kuafu_3v3_cancel_match ( type :number ):void{
		this._stream.reset();
		this._stream.optcode = 252;
		this._stream.writeUint16( 252 );
			//ȡ��ƥ��������
		this._stream.writeUint32 (type);		
		this._send_func(this._stream);			
	}
	public kuafu_3v3_match_oper ( oper :number ):void{
		this._stream.reset();
		this._stream.optcode = 253;
		this._stream.writeUint16( 253 );
			//0:ȡ��& 1:����
		this._stream.writeUint32 (oper);		
		this._send_func(this._stream);			
	}
	public kuafu_xianfu_match ( indx :number ):void{
		this._stream.reset();
		this._stream.optcode = 255;
		this._stream.writeUint16( 255 );
			//�ɸ�����
		this._stream.writeUint8 (indx);		
		this._send_func(this._stream);			
	}
	public buy_xianfu_item ( type :number  ,indx :number  ,count :number ):void{
		this._stream.reset();
		this._stream.optcode = 258;
		this._stream.writeUint16( 258 );
			//�ɸ�ȯ����
		this._stream.writeUint8 (type);		
			//��������
		this._stream.writeUint8 (indx);		
			//��������
		this._stream.writeUint16 (count);		
		this._send_func(this._stream);			
	}
	public xianfu_random_respawn ():void{
		this._stream.reset();
		this._stream.optcode = 259;
		this._stream.writeUint16( 259 );
		this._send_func(this._stream);			
	}
	public doujiantai_fight ( rank :number ):void{
		this._stream.reset();
		this._stream.optcode = 260;
		this._stream.writeUint16( 260 );
			//����
		this._stream.writeUint16 (rank);		
		this._send_func(this._stream);			
	}
	public doujiantai_buytime ( num :number ):void{
		this._stream.reset();
		this._stream.optcode = 261;
		this._stream.writeUint16( 261 );
			//����
		this._stream.writeUint8 (num);		
		this._send_func(this._stream);			
	}
	public doujiantai_clearcd ():void{
		this._stream.reset();
		this._stream.optcode = 262;
		this._stream.writeUint16( 262 );
		this._send_func(this._stream);			
	}
	public doujiantai_first_reward ( id :number ):void{
		this._stream.reset();
		this._stream.optcode = 263;
		this._stream.writeUint16( 263 );
			//���
		this._stream.writeUint8 (id);		
		this._send_func(this._stream);			
	}
	public doujiantai_get_enemys_info ():void{
		this._stream.reset();
		this._stream.optcode = 265;
		this._stream.writeUint16( 265 );
		this._send_func(this._stream);			
	}
	public doujiantai_get_rank ( startIdx :number  ,endIdx :number ):void{
		this._stream.reset();
		this._stream.optcode = 266;
		this._stream.writeUint16( 266 );
			//����
		this._stream.writeUint16 (startIdx);		
			//����
		this._stream.writeUint16 (endIdx);		
		this._send_func(this._stream);			
	}
	public doujiantai_refresh_enemys ():void{
		this._stream.reset();
		this._stream.optcode = 270;
		this._stream.writeUint16( 270 );
		this._send_func(this._stream);			
	}
	public doujiantai_top3 ():void{
		this._stream.reset();
		this._stream.optcode = 271;
		this._stream.writeUint16( 271 );
		this._send_func(this._stream);			
	}
	public use_jump_point ( id :number ):void{
		this._stream.reset();
		this._stream.optcode = 272;
		this._stream.writeUint16( 272 );
			//����id
		this._stream.writeUint32 (id);		
		this._send_func(this._stream);			
	}
	public bag_item_sell ( item_guid :string  ,count :number ):void{
		this._stream.reset();
		this._stream.optcode = 273;
		this._stream.writeUint16( 273 );
			//��Ʒguid
		this._stream.writeString (item_guid);		
			//����
		this._stream.writeUint32 (count);		
		this._send_func(this._stream);			
	}
	public bag_item_sort ():void{
		this._stream.reset();
		this._stream.optcode = 274;
		this._stream.writeUint16( 274 );
		this._send_func(this._stream);			
	}
	public submit_quest_daily2 ():void{
		this._stream.reset();
		this._stream.optcode = 280;
		this._stream.writeUint16( 280 );
		this._send_func(this._stream);			
	}
	public pick_daily2_quest_reward ( indx :number ):void{
		this._stream.reset();
		this._stream.optcode = 284;
		this._stream.writeUint16( 284 );
			//�������
		this._stream.writeUint8 (indx);		
		this._send_func(this._stream);			
	}
	public finish_now_guide ():void{
		this._stream.reset();
		this._stream.optcode = 285;
		this._stream.writeUint16( 285 );
		this._send_func(this._stream);			
	}
	public get_cultivation_info ():void{
		this._stream.reset();
		this._stream.optcode = 286;
		this._stream.writeUint16( 286 );
		this._send_func(this._stream);			
	}
	public get_cultivation_rivals_info ():void{
		this._stream.reset();
		this._stream.optcode = 288;
		this._stream.writeUint16( 288 );
		this._send_func(this._stream);			
	}
	public get_cultivation_reward ():void{
		this._stream.reset();
		this._stream.optcode = 290;
		this._stream.writeUint16( 290 );
		this._send_func(this._stream);			
	}
	public refresh_cultivation_rivals ():void{
		this._stream.reset();
		this._stream.optcode = 291;
		this._stream.writeUint16( 291 );
		this._send_func(this._stream);			
	}
	public plunder_cultivation_rival ( index :number ):void{
		this._stream.reset();
		this._stream.optcode = 292;
		this._stream.writeUint16( 292 );
			//�������
		this._stream.writeUint32 (index);		
		this._send_func(this._stream);			
	}
	public revenge_cultivation_rival ( index :number ):void{
		this._stream.reset();
		this._stream.optcode = 293;
		this._stream.writeUint16( 293 );
			//�Ӷ��¼���
		this._stream.writeUint32 (index);		
		this._send_func(this._stream);			
	}
	public buy_cultivation_left_plunder_count ( count :number ):void{
		this._stream.reset();
		this._stream.optcode = 294;
		this._stream.writeUint16( 294 );
			//��������
		this._stream.writeUint32 (count);		
		this._send_func(this._stream);			
	}
	public get_login_activity_reward ( id :number ):void{
		this._stream.reset();
		this._stream.optcode = 296;
		this._stream.writeUint16( 296 );
			//����id
		this._stream.writeUint32 (id);		
		this._send_func(this._stream);			
	}
	public finish_optional_guide_step ( guide_id :number  ,step :number ):void{
		this._stream.reset();
		this._stream.optcode = 301;
		this._stream.writeUint16( 301 );
			//����id
		this._stream.writeUint32 (guide_id);		
			//�����ֲ���
		this._stream.writeUint8 (step);		
		this._send_func(this._stream);			
	}
	public execute_quest_cmd_after_accepted ( indx :number ):void{
		this._stream.reset();
		this._stream.optcode = 302;
		this._stream.writeUint16( 302 );
			//��������±�
		this._stream.writeUint16 (indx);		
		this._send_func(this._stream);			
	}
	public back_to_famity ():void{
		this._stream.reset();
		this._stream.optcode = 320;
		this._stream.writeUint16( 320 );
		this._send_func(this._stream);			
	}
	public challange_boss ():void{
		this._stream.reset();
		this._stream.optcode = 322;
		this._stream.writeUint16( 322 );
		this._send_func(this._stream);			
	}
	public pick_offline_reward ():void{
		this._stream.reset();
		this._stream.optcode = 325;
		this._stream.writeUint16( 325 );
		this._send_func(this._stream);			
	}
	public smelting_equip ( pos_str :string ):void{
		this._stream.reset();
		this._stream.optcode = 327;
		this._stream.writeUint16( 327 );
			//װ��pos �����߸���
		this._stream.writeString (pos_str);		
		this._send_func(this._stream);			
	}
	public storehouse_hand_in ( pos_str :string ):void{
		this._stream.reset();
		this._stream.optcode = 328;
		this._stream.writeUint16( 328 );
			//װ��pos �����߸���
		this._stream.writeString (pos_str);		
		this._send_func(this._stream);			
	}
	public storehouse_exchange ( pos :number ):void{
		this._stream.reset();
		this._stream.optcode = 329;
		this._stream.writeUint16( 329 );
			//�����pos
		this._stream.writeUint32 (pos);		
		this._send_func(this._stream);			
	}
	public storehouse_destroy ( pos :number ):void{
		this._stream.reset();
		this._stream.optcode = 330;
		this._stream.writeUint16( 330 );
			//�����pos
		this._stream.writeUint32 (pos);		
		this._send_func(this._stream);			
	}
}
//}