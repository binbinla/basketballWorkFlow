import team_detail_dal from '../mock_datas/teamDetail/teamDetailWestern/team_detail_dal';
import team_detail_den from '../mock_datas/teamDetail/teamDetailWestern/team_detail_den';
import team_detail_gsw from '../mock_datas/teamDetail/teamDetailWestern/team_detail_gsw';
import team_detail_hou from '../mock_datas/teamDetail/teamDetailWestern/team_detail_hou';
import team_detail_lac from '../mock_datas/teamDetail/teamDetailWestern/team_detail_lac';
import team_detail_lal from '../mock_datas/teamDetail/teamDetailWestern/team_detail_lal';
import team_detail_mem from '../mock_datas/teamDetail/teamDetailWestern/team_detail_mem';
import team_detail_min from '../mock_datas/teamDetail/teamDetailWestern/team_detail_min';
import team_detail_nop from '../mock_datas/teamDetail/teamDetailWestern/team_detail_nop';
import team_detail_okc from '../mock_datas/teamDetail/teamDetailWestern/team_detail_okc';
import team_detail_phx from '../mock_datas/teamDetail/teamDetailWestern/team_detail_phx';
import team_detail_por from '../mock_datas/teamDetail/teamDetailWestern/team_detail_por';
import team_detail_sac from '../mock_datas/teamDetail/teamDetailWestern/team_detail_sac';
import team_detail_sas from '../mock_datas/teamDetail/teamDetailWestern/team_detail_sas';
import team_detail_uta from '../mock_datas/teamDetail/teamDetailWestern/team_detail_uta';

import team_detail_atl from '../mock_datas/teamDetail/teamDetailEastern/team_detail_atl';
import team_detail_bkn from '../mock_datas/teamDetail/teamDetailEastern/team_detail_bkn';
import team_detail_bos from '../mock_datas/teamDetail/teamDetailEastern/team_detail_bos';
import team_detail_cha from '../mock_datas/teamDetail/teamDetailEastern/team_detail_cha';
import team_detail_chi from '../mock_datas/teamDetail/teamDetailEastern/team_detail_chi';
import team_detail_cle from '../mock_datas/teamDetail/teamDetailEastern/team_detail_cle';
import team_detail_det from '../mock_datas/teamDetail/teamDetailEastern/team_detail_det';
import team_detail_ind from '../mock_datas/teamDetail/teamDetailEastern/team_detail_ind';
import team_detail_mia from '../mock_datas/teamDetail/teamDetailEastern/team_detail_mia';
import team_detail_mil from '../mock_datas/teamDetail/teamDetailEastern/team_detail_mil';
import team_detail_nyk from '../mock_datas/teamDetail/teamDetailEastern/team_detail_nyk';
import team_detail_orl from '../mock_datas/teamDetail/teamDetailEastern/team_detail_orl';
import team_detail_phi from '../mock_datas/teamDetail/teamDetailEastern/team_detail_phi';
import team_detail_tor from '../mock_datas/teamDetail/teamDetailEastern/team_detail_tor';
import team_detail_was from '../mock_datas/teamDetail/teamDetailEastern/team_detail_was';

import team_basic_dal from '../mock_datas/teamBasic/teamBasicWestern/team_basic_dal';
import team_basic_den from '../mock_datas/teamBasic/teamBasicWestern/team_basic_den';
import team_basic_gsw from '../mock_datas/teamBasic/teamBasicWestern/team_basic_gsw';
import team_basic_hou from '../mock_datas/teamBasic/teamBasicWestern/team_basic_hou';
import team_basic_lac from '../mock_datas/teamBasic/teamBasicWestern/team_basic_lac';
import team_basic_lal from '../mock_datas/teamBasic/teamBasicWestern/team_basic_lal';
import team_basic_mem from '../mock_datas/teamBasic/teamBasicWestern/team_basic_mem';
import team_basic_min from '../mock_datas/teamBasic/teamBasicWestern/team_basic_min';
import team_basic_nop from '../mock_datas/teamBasic/teamBasicWestern/team_basic_nop';
import team_basic_okc from '../mock_datas/teamBasic/teamBasicWestern/team_basic_okc';
import team_basic_phx from '../mock_datas/teamBasic/teamBasicWestern/team_basic_phx';
import team_basic_por from '../mock_datas/teamBasic/teamBasicWestern/team_basic_por';
import team_basic_sac from '../mock_datas/teamBasic/teamBasicWestern/team_basic_sac';
import team_basic_sas from '../mock_datas/teamBasic/teamBasicWestern/team_basic_sas';
import team_basic_uta from '../mock_datas/teamBasic/teamBasicWestern/team_basic_uta';

import team_basic_atl from '../mock_datas/teamBasic/teamBasicEastern/team_basic_atl';
import team_basic_bkn from '../mock_datas/teamBasic/teamBasicEastern/team_basic_bkn';
import team_basic_bos from '../mock_datas/teamBasic/teamBasicEastern/team_basic_bos';
import team_basic_cha from '../mock_datas/teamBasic/teamBasicEastern/team_basic_cha';
import team_basic_chi from '../mock_datas/teamBasic/teamBasicEastern/team_basic_chi';
import team_basic_cle from '../mock_datas/teamBasic/teamBasicEastern/team_basic_cle';
import team_basic_det from '../mock_datas/teamBasic/teamBasicEastern/team_basic_det';
import team_basic_ind from '../mock_datas/teamBasic/teamBasicEastern/team_basic_ind';
import team_basic_mia from '../mock_datas/teamBasic/teamBasicEastern/team_basic_mia';
import team_basic_mil from '../mock_datas/teamBasic/teamBasicEastern/team_basic_mil';
import team_basic_nyk from '../mock_datas/teamBasic/teamBasicEastern/team_basic_nyk';
import team_basic_orl from '../mock_datas/teamBasic/teamBasicEastern/team_basic_orl';
import team_basic_phi from '../mock_datas/teamBasic/teamBasicEastern/team_basic_phi';
import team_basic_tor from '../mock_datas/teamBasic/teamBasicEastern/team_basic_tor';
import team_basic_was from '../mock_datas/teamBasic/teamBasicEastern/team_basic_was';

export function mapTeamIdToDetail(id: string) {
  switch(id) {
    case '1610612745': return team_detail_hou
    case '1610612744': return team_detail_gsw
    case '1610612757': return team_detail_por
    case '1610612760': return team_detail_okc
    case '1610612762': return team_detail_uta
    case '1610612740': return team_detail_nop
    case '1610612759': return team_detail_sas
    case '1610612750': return team_detail_min
    case '1610612743': return team_detail_den
    case '1610612746': return team_detail_lac
    case '1610612747': return team_detail_lal
    case '1610612758': return team_detail_sac
    case '1610612742': return team_detail_dal
    case '1610612763': return team_detail_mem
    case '1610612756': return team_detail_phx
    case '1610612761': return team_detail_tor
    case '1610612738': return team_detail_bos
    case '1610612755': return team_detail_phi
    case '1610612739': return team_detail_cle
    case '1610612754': return team_detail_ind
    case '1610612748': return team_detail_mia
    case '1610612749': return team_detail_mil
    case '1610612764': return team_detail_was
    case '1610612765': return team_detail_det
    case '1610612766': return team_detail_cha
    case '1610612752': return team_detail_nyk
    case '1610612751': return team_detail_bkn
    case '1610612741': return team_detail_chi
    case '1610612753': return team_detail_orl
    case '1610612737': return team_detail_atl
    default: return ''
  }
}

export function mapTeamIdToBasic(id: string) {
  switch(id) {
    case '1610612745': return team_basic_hou
    case '1610612744': return team_basic_gsw
    case '1610612757': return team_basic_por
    case '1610612760': return team_basic_okc
    case '1610612762': return team_basic_uta
    case '1610612740': return team_basic_nop
    case '1610612759': return team_basic_sas
    case '1610612750': return team_basic_min
    case '1610612743': return team_basic_den
    case '1610612746': return team_basic_lac
    case '1610612747': return team_basic_lal
    case '1610612758': return team_basic_sac
    case '1610612742': return team_basic_dal
    case '1610612763': return team_basic_mem
    case '1610612756': return team_basic_phx
    case '1610612761': return team_basic_tor
    case '1610612738': return team_basic_bos
    case '1610612755': return team_basic_phi
    case '1610612739': return team_basic_cle
    case '1610612754': return team_basic_ind
    case '1610612748': return team_basic_mia
    case '1610612749': return team_basic_mil
    case '1610612764': return team_basic_was
    case '1610612765': return team_basic_det
    case '1610612766': return team_basic_cha
    case '1610612752': return team_basic_nyk
    case '1610612751': return team_basic_bkn
    case '1610612741': return team_basic_chi
    case '1610612753': return team_basic_orl
    case '1610612737': return team_basic_atl
    default: return ''
  }
}

