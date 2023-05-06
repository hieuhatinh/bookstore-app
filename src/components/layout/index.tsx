import HeaderLayout from "@/components/main/HeaderLayout";

export default function Layout({ children }) {
    return (
        <>
            <HeaderLayout />
            <main>{children}</main>
        </>
    )
}