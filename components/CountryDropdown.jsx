import { useState } from 'react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

const flags = [
    'ad.svg', 'ae.svg', 'af.svg', 'ag.svg', 'ai.svg', 'al.svg', 'am.svg', 'ao.svg', 'aq.svg', 'ar.svg', 'as.svg', 'at.svg', 'au.svg',
    'aw.svg', 'ax.svg', 'az.svg', 'ba.svg', 'bb.svg', 'bd.svg', 'be.svg', 'bf.svg', 'bg.svg', 'bh.svg', 'bi.svg', 'bj.svg', 'bl.svg',
    'bm.svg', 'bn.svg', 'bo.svg', 'bq.svg', 'br.svg', 'bs.svg', 'bt.svg', 'bv.svg', 'bw.svg', 'by.svg', 'bz.svg', 'ca.svg', 'cc.svg',
    'cd.svg', 'cf.svg', 'cg.svg', 'ch.svg', 'ci.svg', 'ck.svg', 'cl.svg', 'cm.svg', 'cn.svg', 'co.svg', 'cr.svg', 'cu.svg', 'cv.svg',
    'cw.svg', 'cx.svg', 'cy.svg', 'cz.svg', 'de.svg', 'dj.svg', 'dk.svg', 'dm.svg', 'do.svg', 'dz.svg', 'ec.svg', 'ee.svg', 'eg.svg',
    'eh.svg', 'er.svg', 'es.svg', 'et.svg', 'eu.svg', 'fi.svg', 'fj.svg', 'fk.svg', 'fm.svg', 'fo.svg', 'fr.svg', 'ga.svg', 'gb-eng.svg',
    'gb-nir.svg', 'gb-sct.svg', 'gb-wls.svg', 'gb.svg', 'gd.svg', 'ge.svg', 'gf.svg', 'gg.svg', 'gh.svg', 'gi.svg', 'gl.svg', 'gm.svg',
    'gn.svg', 'gp.svg', 'gq.svg', 'gr.svg', 'gs.svg', 'gt.svg', 'gu.svg', 'gw.svg', 'gy.svg', 'hk.svg', 'hm.svg', 'hn.svg', 'hr.svg',
    'ht.svg', 'hu.svg', 'id.svg', 'ie.svg', 'il.svg', 'im.svg', 'in.svg', 'io.svg', 'iq.svg', 'ir.svg', 'is.svg', 'it.svg', 'je.svg',
    'jm.svg', 'jo.svg', 'jp.svg', 'ke.svg', 'kg.svg', 'kh.svg', 'ki.svg', 'km.svg', 'kn.svg', 'kp.svg', 'kr.svg', 'kw.svg', 'ky.svg',
    'kz.svg', 'la.svg', 'lb.svg', 'lc.svg', 'li.svg', 'lk.svg', 'lr.svg', 'ls.svg', 'lt.svg', 'lu.svg', 'lv.svg', 'ly.svg', 'ma.svg',
    'mc.svg', 'md.svg', 'me.svg', 'mf.svg', 'mg.svg', 'mh.svg', 'mk.svg', 'ml.svg', 'mm.svg', 'mn.svg', 'mo.svg', 'mp.svg', 'mq.svg',
    'mr.svg', 'ms.svg', 'mt.svg', 'mu.svg', 'mv.svg', 'mw.svg', 'mx.svg', 'my.svg', 'mz.svg', 'na.svg', 'nc.svg', 'ne.svg', 'nf.svg',
    'ng.svg', 'ni.svg', 'nl.svg', 'no.svg', 'np.svg', 'nr.svg', 'nu.svg', 'nz.svg', 'om.svg', 'pa.svg', 'pe.svg', 'pf.svg', 'pg.svg',
    'ph.svg', 'pk.svg', 'pl.svg', 'pm.svg', 'pn.svg', 'pr.svg', 'ps.svg', 'pt.svg', 'pw.svg', 'py.svg', 'qa.svg', 're.svg', 'ro.svg',
    'rs.svg', 'ru.svg', 'rw.svg', 'sa.svg', 'sb.svg', 'sc.svg', 'sd.svg', 'se.svg', 'sg.svg', 'sh.svg', 'si.svg', 'sj.svg', 'sk.svg',
    'sl.svg', 'sm.svg', 'sn.svg', 'so.svg', 'sr.svg', 'ss.svg', 'st.svg', 'sv.svg', 'sx.svg', 'sy.svg', 'sz.svg', 'tc.svg', 'td.svg',
    'tf.svg', 'tg.svg', 'th.svg', 'tj.svg', 'tk.svg', 'tl.svg', 'tm.svg', 'tn.svg', 'to.svg', 'tr.svg', 'tt.svg', 'tv.svg', 'tw.svg',
    'tz.svg', 'ua.svg', 'ug.svg', 'um.svg', 'us.svg', 'uy.svg', 'uz.svg', 'va.svg', 'vc.svg', 've.svg', 'vg.svg', 'vi.svg', 'vn.svg',
    'vu.svg', 'wf.svg', 'ws.svg', 'xk.svg', 'ye.svg', 'yt.svg', 'za.svg', 'zm.svg', 'zw.svg'
];

export default function CountryDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedFlag, setSelectedFlag] = useState('ad.svg');

    const handleFlagSelect = (flag) => {
        setSelectedFlag(flag);
        setIsOpen(false);
    };

    return (
        <div className="">
            {/* <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full h-full px-4 py-3 bg-white border border-gray-300 rounded">
                <img src={`/flags/${selectedFlag}`} alt="Selected Flag" className="w-6 h-4 border-[0.5px] border-black  py-1 px-1 mx-1" />
                <svg className="w-6 h-4 ml-auto mr-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M19 9l-7 7-7-7' : 'M19 9l-7 7-7-7'} />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-auto">
                    {flags.map((flag) => (
                        <div
                            key={flag}
                            className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-200"
                            onClick={() => handleFlagSelect(flag)}
                        >
                            <img src={`/flags/${flag}`} alt={flag} className="w-4 h-4" />
                        </div>
                    ))}
                </div>
            )} */}
            <Select onValueChange={(value) => handleFlagSelect(value)} value={selectedFlag}>
            <SelectTrigger className="bg-white w-[82px] h-[39px] md:h-[51px] focus:outline-none">
                <img src={`/flags/${selectedFlag}`} alt="Selected Flag" className="w-6 h-4 bg-white border-[0.5px] border-black  py-1 px-1 mx-1" />
            </SelectTrigger>
            <SelectContent className='w-full bg-white'>
                <SelectGroup>
                {flags.map((flag) => (
                        <SelectItem
                            key={flag}
                            className="flex items-center w-[82px] justify-end px-4 py-2 cursor-pointer bg-white hover:bg-gray-200"
                            value={flag}
                        >
                            <img src={`/flags/${flag}`} alt={flag} className="w-4 h-4" />
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
            </Select>
        </div>
    );
}
