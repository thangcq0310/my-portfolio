import { Package, Mail } from "lucide-react"
import Container from "../components/layout/Container"

export function About() {
  return (
    <Container>
      <div className="py-12">
        <h1 className="text-3xl font-bold text-[#0F172A] mb-8">Ve SCHub.vn</h1>
        <div className="bg-white rounded-xl border border-slate-200 p-8">
          <div className="flex items-center gap-4 mb-6">
            <Package className="w-12 h-12 text-[#072C2C]" />
            <div>
              <h2 className="text-xl font-bold text-[#0F172A]">SCHub.vn</h2>
              <p className="text-slate-600">Nen tang kien thuc Supply Chain cho nguoi Viet</p>
            </div>
          </div>
          <p className="text-slate-600 mb-6">
            SCHub.vn duoc xay dung nham giup nhung nguoi lam trong linh vuc logistics, warehouse va supply chain operations tai cac doanh nghiep san xuat/xuat khau Viet Nam tiep can kien thuc, cong cu va kinh nghiem thuc chien mot cach de hieu va ap dung duoc.
          </p>
          <p className="text-slate-600">
            Chung toi cung cap: bai viet chuyen sau, sach va template thuc hanh, cong cu digital, va dich vu tu van chuyen nghiep.
          </p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-8 mt-8">
          <h2 className="text-xl font-bold text-[#0F172A] mb-6">Lien he</h2>
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-[#072C2C]" />
            <span>contact@schub.vn</span>
          </div>
        </div>
      </div>
    </Container>
  )
}