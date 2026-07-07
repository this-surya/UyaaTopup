import {
    Gamepad2,
    UserRound,
    Gem,
    CreditCard,
    Rocket,
} from "lucide-react";

const steps = [
    {
        id: 1,
        title: "Pilih Game",
        description: "Pilih game yang ingin kamu top up.",
        icon: Gamepad2,
    },
    {
        id: 2,
        title: "Masukkan User ID",
        description: "Masukkan User ID dan Server ID akun game.",
        icon: UserRound,
    },
    {
        id: 3,
        title: "Pilih Nominal",
        description: "Tentukan jumlah Diamond atau UC yang ingin dibeli.",
        icon: Gem,
    },
    {
        id: 4,
        title: "Pilih Pembayaran",
        description: "Gunakan QRIS, Dana, OVO, GoPay, atau Bank.",
        icon: CreditCard,
    },
    {
        id: 5,
        title: "Diamond Masuk",
        description: "Pesanan diproses otomatis dalam hitungan detik.",
        icon: Rocket,
    },
];

export default steps;