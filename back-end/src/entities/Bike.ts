import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Brand } from "./Brand"
import { Photo } from "./Photo";
import { Category } from "./Category";
import { User } from "./User";
import { Rent } from "./Rent";

@Entity({ name: "bikes" })
export class Bike {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true, length: 200 })
    description: string;

    @Column({ nullable: true, type: "decimal", precision: 10, scale: 2 })
    hourlyvalue: number;

    @Column({ nullable: true, type: "decimal", precision: 10, scale: 2 })
    dailyvalue: number;

    @ManyToOne(() => Brand, { nullable: true })
    @JoinColumn({ name: "idbrand" })
    brand: Brand;

    @ManyToOne(() => Category, { nullable: true })
    @JoinColumn({ name: "idcategory" })
    category: Category

    @ManyToOne(() => User, { nullable: true })
    @JoinColumn({ name: "iduser" })
    user: User;

    @OneToMany(() => Photo, (photo) => photo.bike)
    photos: Photo[];

    @OneToMany(() => Rent, (rent) => rent.bike)
    rents: Rent[];
}