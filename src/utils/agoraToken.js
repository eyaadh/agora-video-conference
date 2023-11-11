import axios from 'axios'
import {useUserStore} from "@/stores/userStore";

const APITokenHost = import.meta.env.VITE_TOKEN_API_HOST
const userStore = useUserStore()
const uid = userStore.userData ? userStore.userData.uid : null

const genToken = (joinType, joinRoomName) => {
	return new Promise((resolve, reject) => {
		if (joinType === 'create') {
			axios({
				method: 'get',
				url: `${APITokenHost}/rtc/${joinRoomName}/publisher/uid/${uid}`,
			})
				.then((resp) => {
					userStore.rtcToken = resp.data.rtcToken
					userStore.channelToJoin = joinRoomName
					resolve(true)
				})
				.catch(err => reject(err))
		}
		if (joinType === 'join') {
			axios({
				method: 'get',
				url: `${APITokenHost}/rtc/${joinRoomName}/audience/uid/${uid}`,
			})
				.then((resp) => {
					userStore.rtcToken = resp.data.rtcToken
					userStore.channelToJoin = joinRoomName
					resolve(true)
				})
				.catch(err => reject(err))
		}
	})
}

export {genToken}