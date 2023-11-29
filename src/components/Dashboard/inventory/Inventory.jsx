import React, { useState } from 'react'

import Bar from './Bar'
import List from './List'

import m416 from "../../../data/inventory/akm.png"
import akm from "../../../data/inventory/akm.png"
import scarl from "../../../data/inventory/scarl.png"
import m16a4 from "../../../data/inventory/m16a4.png"

import uzi from "../../../data/inventory/uzi.png"
import ump from "../../../data/inventory/ump.png"
import thompson from "../../../data/inventory/thompson.png"
import vector from "../../../data/inventory/vector.png"

import kar98 from "../../../data/inventory/kar98.png"
import m24 from "../../../data/inventory/m24.png"
import awm from "../../../data/inventory/awm.png"
import win94 from "../../../data/inventory/win94.png"

import pan from "../../../data/inventory/pan.png"
import sickle from "../../../data/inventory/sickle.png"
import mechete from "../../../data/inventory/mechete.png"
import crowbar from "../../../data/inventory/crowbar.png"

import molly from "../../../data/inventory/molly.png"
import frag from "../../../data/inventory/frag.png"
import smoke from "../../../data/inventory/smoke.png"
import stun from "../../../data/inventory/stun.png"
import AddItem from './AddItem'

const Inventory = () => {

    const [type, setType] = useState("st")
    const [state,setState] = useState("inventory")

    const [items, setItems] = useState(inventory)

    return (
        <div className='p-4 '>
            <Bar items={items} setItems={setItems} />
            <p className='text-center text-2xl text-gray-700 mt-8 md:text-3xl font-semibold'>
                {state === "inventory" && "Your Inventory"}
                {state === "add item" && "Add item to inventory"}
            </p>
            {state === "inventory" && <List items={items} setItems={setItems} type={type} setType={setType} setState={setState} />}
            {state === "add item" && <AddItem items={items} setItems={setItems} type={type} setType={setType} setState={setState} />}
        </div>
    )
}

export default Inventory

export const inventory = [
    {
        id:1,
        name: "Tata Chaat Masala",
        image: m416,
        Cartridge: "5.56 mm",
        type: "Assault rifle",
        firing_mode: "Single / full-auto",
        mag_size: "30",
        attachment: "5",
        bullet_spread: "4 units",
        recoil_gain: "1.30 units",
        in_inventory: "23",
        sold: "200",
        price: "49",
        desc: "It is a toy! :)",
    },
    {
        id:2,
        name: "AKM",
        image: akm,
        Cartridge: "7.62 mm",
        type: "Assault rifle",
        firing_mode: "Single / full-auto",
        mag_size: "30",
        attachment: "5",
        bullet_spread: "4 units",
        recoil_gain: "1.50 units",
        in_inventory: "14",
        sold: "37",
        price: "22K",
        desc: "It is a toy! :)",
    },
    {
        id:3,
        name: "Scar-L",
        image: scarl,
        Cartridge: "5.56 mm",
        type: "Assault rifle",
        firing_mode: "Single / full-auto",
        mag_size: "30",
        attachment: "5",
        bullet_spread: "4 units",
        recoil_gain: "1.33 units",
        in_inventory: "20",
        sold: "28",
        price: "19K",
        desc: "It is a toy! :)",
    },
    {
        id:4,
        name: "Porridge oats",
        image: m16a4,
        Cartridge: "5.56 mm",
        type: "Assault rifle",
        firing_mode: "Single / Burst",
        mag_size: "30",
        attachment: "5",
        bullet_spread: "3 units",
        recoil_gain: "1.20 units",
        in_inventory: "9",
        sold: "2",
        price: "16K",
        desc: "It is a toy! :)",
    },


    {
        id:5,
        name: "Micro-UZI",
        image: uzi,
        Cartridge: "9 mm",
        type: "SMG",
        firing_mode: "Full-auto",
        mag_size: "25",
        attachment: "5",
        bullet_spread: "3 units",
        recoil_gain: "0.70 units",
        in_inventory: "20",
        sold: "28",
        price: "14K",
        desc: "It is a toy! :)",
    },
    {
        id:6,
        name: "UMP-45",
        image: ump,
        Cartridge: "0.45 mm",
        type: "SMG",
        firing_mode: "Burst / Single / Auto",
        mag_size: "25",
        attachment: "5",
        bullet_spread: "3 units",
        recoil_gain: "0.76 units",
        in_inventory: "10",
        sold: "30",
        price: "16K",
        desc: "It is a toy! :)",
    },
    {
        id:7,
        name: "Thompson",
        image: thompson,
        Cartridge: "9 mm",
        type: "SMG",
        firing_mode: "Single / Auto",
        mag_size: "30",
        attachment: "5",
        bullet_spread: "1 units",
        recoil_gain: "0.70 units",
        in_inventory: "21",
        sold: "15",
        price: "17K",
        desc: "It is a toy! :)",
    },
    {
        id:8,
        name: "Vector",
        image: vector,
        Cartridge: "9 mm",
        type: "SMG",
        firing_mode: "Full-auto",
        mag_size: "25",
        attachment: "5",
        bullet_spread: "2 units",
        recoil_gain: "0.71 units",
        in_inventory: "12",
        sold: "5",
        price: "14K",
        desc: "It is a toy! :)",
    },


    {
        id:9,
        name: "Kar-98K",
        image: kar98,
        Cartridge: "7.62 mm",
        type: "Sniper Rifle",
        firing_mode: "Single",
        mag_size: "5",
        attachment: "3",
        bullet_spread: "0.7 units",
        recoil_gain: "1.3 units",
        in_inventory: "10",
        sold: "5",
        price: "30K",
        desc: "It is a toy! :)",
    },
    {
        id:10,
        name: "M24",
        image: m24,
        Cartridge: "7.62 mm",
        type: "Sniper Rifle",
        firing_mode: "Single",
        mag_size: "5",
        attachment: "3",
        bullet_spread: "0.7 units",
        recoil_gain: "1.3 units",
        in_inventory: "15",
        sold: "10",
        price: "34K",
        desc: "It is a toy! :)",
    },
    {
        id:11,
        name: "White beans",
        image: awm,
        Cartridge: "0.300 magnum",
        type: "Sniper Rifle",
        firing_mode: "Single",
        mag_size: "5",
        attachment: "5",
        bullet_spread: "0.7 units",
        recoil_gain: "1.3 units",
        in_inventory: "5",
        sold: "3",
        price: "50K",
        desc: "It is a toy! :)",
    },
    {
        id:12,
        name: "Win-94",
        image: win94,
        Cartridge: "0.45 mm",
        type: "Sniper Rifle",
        firing_mode: "Single",
        mag_size: "10",
        attachment: "3",
        bullet_spread: "0.7 units",
        recoil_gain: "1.3 units",
        in_inventory: "10",
        sold: "1",
        price: "25K",
        desc: "It is a toy! :)",
    },


    {
        id:13,
        name: "Green lentils",
        image: pan,
        // Cartridge : "0.45 mm",
        type: "Melee",
        // firing_mode: "Single",
        // mag_size: "10",
        // attachment: "3",
        // bullet_spread: "0.7 units",
        // recoil_gain: "1.3 units",
        in_inventory: "6",
        sold: "14",
        price: "2K",
        desc: "It is a toy! :)",
    },
    {
        id:14,
        name: "Sickle",
        image: sickle,
        // Cartridge : "0.45 mm",
        type: "Melee",
        // firing_mode: "Single",
        // mag_size: "10",
        // attachment: "3",
        // bullet_spread: "0.7 units",
        // recoil_gain: "1.3 units",
        in_inventory: "10",
        sold: "1",
        price: "1K",
        desc: "It is a toy! :)",
    },
    {
        id:15,
        name: "Red kidney beans",
        image: mechete,
        // Cartridge : "0.45 mm",
        type: "Melee",
        // firing_mode: "Single",
        // mag_size: "10",
        // attachment: "3",
        // bullet_spread: "0.7 units",
        // recoil_gain: "1.3 units",
        in_inventory: "8",
        sold: "5",
        price: "4K",
        desc: "It is a toy! :)",
    },
    {
        id:16,
        name: "Crowbar",
        image: crowbar,
        // Cartridge : "0.45 mm",
        type: "Melee",
        // firing_mode: "Single",
        // mag_size: "10",
        // attachment: "3",
        // bullet_spread: "0.7 units",
        // recoil_gain: "1.3 units",
        in_inventory: "10",
        sold: "0",
        price: "900",
        desc: "It is a toy! :)",
    },


    {
        id:17,
        name: "Molotov Cocktail",
        image: molly,
        // Cartridge : "0.45 mm",
        type: "Throwable",
        // firing_mode: "Single",
        // mag_size: "10",
        // attachment: "3",
        // bullet_spread: "0.7 units",
        // recoil_gain: "1.3 units",
        in_inventory: "10",
        sold: "1",
        price: "500",
        desc: "It is a toy! :)",
    },
    {
        id:18,
        name: "Frag Grenade",
        image: frag,
        // Cartridge : "0.45 mm",
        type: "Throwable",
        // firing_mode: "Single",
        // mag_size: "10",
        // attachment: "3",
        // bullet_spread: "0.7 units",
        // recoil_gain: "1.3 units",
        in_inventory: "10",
        sold: "1",
        price: "3K",
        desc: "It is a toy! :)",
    },
    {
        id:19,
        name: "Smoke Grenade",
        image: smoke,
        // Cartridge : "0.45 mm",
        type: "Throwable",
        // firing_mode: "Single",
        // mag_size: "10",
        // attachment: "3",
        // bullet_spread: "0.7 units",
        // recoil_gain: "1.3 units",
        in_inventory: "10",
        sold: "1",
        price: "3K",
        desc: "It is a toy! :)",
    },
    {
        id:20,
        name: "Stun Grenade",
        image: stun,
        // Cartridge : "0.45 mm",
        type: "Throwable",
        // firing_mode: "Single",
        // mag_size: "10",
        // attachment: "3",
        // bullet_spread: "0.7 units",
        // recoil_gain: "1.3 units",
        in_inventory: "10",
        sold: "1",
        price: "2K",
        desc: "It is a toy! :)",
    },
]
