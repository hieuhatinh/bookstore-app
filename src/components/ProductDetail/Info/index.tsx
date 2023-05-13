import { Badge, Box, Button, Divider, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import SendIcon from '@mui/icons-material/Send'

import NumberOfProducts from '@/components/NumberOfProducts'
import Shop from './Shop'

export default function InfoProductDetail() {
    return (
        <Box>
            <Grid container>
                <Grid item xs={5}>
                    <Image
                        src="data:image/webp;base64,UklGRgwZAABXRUJQVlA4IAAZAADQVgCdASqOANYAPlkkjkUjoiEWPG2MOAWEtAULY82P59j/EDv0uJ9+/KH2hrF/hPw97N+v7rfy9OZP9j9wny8/0P7Ae4X9Cf9b3AP08/zn9c/HT4svVf+53qA/of98/8H/E94P/k/6T2R/3r9u/cA/p39I/8/td+pB6AH7Gf/T10f2t+EH+2f7H9o/gN/Yf/2+wB/8/UA/+3Gw+Sjxt/T+G/jw9Qe1nyAfM+Qvrc1FPln3O/T/3L9wvjz/L/6bwT+P/+F6gX49/NP85/Zt+L27zBfZv6l/wPS7+Z/3vob9dvYA/nH9R/1nr1/p/A3+7/7f9jvgA/mv91/8P+J9jz/v/2Hno+n//h/rPgK/Xn/u+u17FP3G///usfs8gxTuQXBxUXUKb9T+CMNpCAyR/4TcDfw6g4fAZpZUQjFYlZ6BVLPy0Y2oSwEWumBzbqC8IY5b99Mk0mlZajvLe3S/vEjYmnQFtnoy1N8L1wQgZNgWkE+viTO/7B896cOgbePIsaLuveNkgey0toUM0eOF808MV4jl+5/gJatIm4DBM8+69WYHqdveKTGllPcLuGt0XdtLeRU+VTUPiYHsRrwareyHrV6pPvT7U1Q5YS9u3HHcz9IY9GfoGQmf/Ge2TqCGFT4J/OIVXkYfRF82QyqbOtVZmciK7Qgj7OyJqg+BWvgPzR3qJg+ULe2o7h+wi2jQB7M/kniuFX/BfMxQje8M+DJFLePFGx8MIZl/iifWbAfOjBQQzoITTcYAmlbTVNYaqdrl+fOn/ooXQ5vbxRE15Qda5L/rKyO3CmCPzooEd0G2HfbpLggPf3F3Rdp+a30hGWefuBehjcgaZcpRk4oq58hoqYjV01PaP+5go1XYWctNe3OATb+zIx2q3q8eG4AZEJQDXvHwSi8FIfpj0Fz2UrQqRkpyUWzm7aYQJpgig6/AAP7+SZxIPEMgBmUFUaU+PXLjP6dp/TtP0qfHMORYwv4TiNGmaWo/k4OcouUvHshPHkCO1vJ+CnyLY3GSbMj5D7on67pp9WRLQ1VmEUiBv9tXqKloAWCIx1WYIPZsmB27ZIaquukafmwrwR48eK59zkvRX68Ox3nVd1063NGPv3Gv8XYK+nHzcIl1TTErDWI6QObxBueOkpZpR1OwEwNRHti8bUMA/5+TRZAgOsiyrb3niVFXY9Kf/b4bS1a1Dgw3yw8BQCgy9iwdA6lMuxmMmECDRl5K2HaJlkvZkDailT7q+IwPqjOW4aa2/6th0gGGYBrICFRZad50m0evgJCZEZBq4tFbnNcyJfD/XBBZ+mQRR8H/rp34XmxMplJ1v2p0+GPXtxWv6C2jeoeN7O93GtrOxlo0BeTwxhLGWpf378HyJvYC891y3v+t9I2WqQUfQahjkRnxZHjfS6KAHhItyILknsVGf0ImObZyOuspE4Yi7fFu6RIAFiM9QnLPsbl9q4+ZgBcDRBhkPLf6fcLrMPj413FEZYa18cKMqj+gvMZE7BXwgyn3VL+/6VtRE4hZ9bXzuQeYwBf485DLRTCP5eIDk33p1GXPdRSO2Hc//oJ5xu3+F3tqmp6Bu7UwHR1R/Hr/oFm5AyS+qyXa6G/UxiXhmXJzklWFdXD1YwOcCm+TihDUKsEBJI+feEbfGAndMCTNIFhCk9RHCUi58sO+m0Mn9JACO6N7QixsKhD9nHU+q29aKKnxRMeQXb03+I04munJkE5Q3CF7HUcnT1zvde2vYw8ipKad8rHdXUGLxZ9G6IADXmb0/6Nel+GpGGsuzZNNyjF3r6qSmmwx9ua1QdVuAaARRABWIDG4QdWFTVdgWiJLfqHVfUZABibbM4/OSpTo0EcbloSTDsZ4zxsj6taQd2Zjoxy/uuGXpuh9a8mGKSgKn70LO02ce17LWVVaQNI10ebF/UL6DiB0RAH9mnBhA9C+Z+LI+3kSQFpoUVc3QI8EqWMEaRv7r18NIRddIn24GtwoRvF6LMSiTwBSxw70toCcMV09vm6W5SQnNG1p/Rp6BPWU3fFwznztx/bjVvQCOsvwaEoSt13p0ltM5wafzbDYQ5uaTrc8ODpXV52QHkAeIJQQrhtgSEQuGVHGul8DGkx4OHbFIo1eoiJXCec2Gka5FGh+DmOrOAlM53dfgTxYvKyEciDfH26mg4HVKmPABd919CFiG53WY6OYItaVtbt9/x2Xe42M/ckQHZSqawZ3gqD6A0N7DcZJJect8l0L7Nr7dLxNz6rfYt2Q1rwVPERd0KGFrftoAuqcIvDV8pEdkjk1nvnVhg8rdJ0MAbI+RDCh4Z4yI5tL1FRng3QzmbiBRpB1/tQLPmBjz2SWKkOEm/3x66IHrqB53EsTQcAX18gPlmp+Kuz8NzYcidOqLF97o+ZwvwJTQz8a5kbsFDcNTJQsoOIcN+pAylOqdNqdaAZVqlmhANPLV6rqPUCkCcuqpH2Gee2v51E4Kgpd1GjjpKRI8upllWRiEfqhGsM7Aok6+vMKK/oAdE1JLxkffcjQOZPDNHs5Cl2igayoYsZ3OZZikwX1jgBuA90T19DwUA0MXw84j+U25fPKPdDK2eIxINnEKUKtza7jrUQXfSHQetGrwBYrIgvEb7pZZFXdMaC4EoAscAMSzNmccX7hkZvofacMfeVTkOwKDibChCmfd9TOavij3KN62k+e1TE9aeSk8Isj25AJDYGIkwcCqb2W3piT6Gb75+A4wFFBZOh0C6Wu12o7YEWz6BL01eA2dh2tz14uAU5LzbE3z2j07Rve5p7SxmuBWgHHQz7MjCgx1Y6moYBn9tLDQ5CYPvEK3scF+5TUeC6HW1p3VPjTLS7Esdllwi4z2c9WM8FKOuPE3eekwLON/cRe9U+z+VDvUxeNKIBN+Q0Oq8W5JZYtcgRq+ng689/jR5dhK65TYazUj0/o5Y5F9wwDsxF/Y+2n3/a2MYjQ6q/oUUWY169ut+MIn+7W+vc1gjscJDaJ5UOk2GP0Uvc1Ma/x8egrYCaFElGFgn+VgZzy7j0Y96LApHrJ3bLdWJk1EePPyML/4BXoM224+BGGSTtR8DrQkwC+rVVkNKprlyVZiiO7hgr+HhfHEPQ4g/1bbP9sM4AAE/ovAUINao0XS7X4y3Mw/jGwhLghyR3KpGsH1u3SIAz0e7SudJGmcdYhtv1Bsd1RRgBF6yQHdXfcYLcYzep4EYSnj1aWyBbUXD1LeqVF4gUrdCoFngBdqz/D5LG/i4E4UH6kCcfKMYi5xWNQOaEjbvVNGbjO4aJ/ExVXM/ff1RFtHPGtS4UP+vsk6Xj//0j8FmXrgeqT/5nlOLenIGH81hIERv9BHwkSSJ5R2h7LBOWZzboby/ALyqWvz9FXL3hUhMfTZBBxM4R4FpDRKDkiPiS8sXfvL4Et6qX0x4iFx0wiI5/irj7ZFGeSPdodfIuwjebLrpobEBFprxZK/H7dvY3ydoNDuqhF135YAtZrumL0eXFl5XnB3l2imWOfRkHrJB5CZ09Gml173rcLdqus3Pt40t7sH2p1spUZfNKsR1aRlgT2vzC8hJm8jHt4Pzo1VlDiMAJPz+v6SvHumsuTuvF1v/kNJf9QcxsJ9qoUTH9OjKYn7Jt7f2np+zuRPEsAgqA8xA7l5Tr2gVJ3Titav1+2oje2uve/7IY/RMTSOt+OGP2bfzwESq2bjnkRmbjiZk8GnOXPG2VamCfXEJsObQ4H/rv9p/MhGcnLZw4dUAdK3ac4rxmRcTGhqPRM5Fp1h7d/yP/uS65r7nXO3Wx3FiR/otNl7rw075O7tY1T2doaehaWm/Uc3+XUN5t5mx/xHoFCov0C7fbvC9t2uoH/+GZDVLf8xruk+3H4Pd4qSL+TJzVlqaFGoGqEEt9WpYBOFZzEqOPjvKiOOHUxhQcEOZdsYT4iAVoVXpF6UCtCFWIRa03VHzFv6ZPtlcKYI/un//Ykd+hMkhaJ1vPUfjfKERNWX6gTnrZDz6b1yEvWUlfR0G15kZy7kqKKhLydCK25EDXTh08PEGUHjQKpyXU1tj/sZY7bXnhlDryeaCGTJvh3TtsW1xrLO4IqVPQHHZgHnQXeckQqy1lZ7qIXy6bi1XYCVSITl6b3a1+ZFDJom+p7BpQMi153rtPBjxw+kmP6Z4LCySzAH73Q0+WFKgbae+vIVhhoaK4uWgc3zSVvwetEZl6BcItTSQfuQXDEbtLPXH9O/4BhDSHBC6+05aB3G0nGux1YBsWpFMSzn91VzXEWlAWGXNsn7aSGDMvnfMQyH2heuKu3987FNij4cc2UtlZnXThDN+umavmMZrmPEqoryFpfNmORs9bVmTzcBMm2HPAO8v/Cwr+DPxhhl6xz/FJYkFO8UEp+H1b8KnSOl4C/KqXojlWcWoTWbqpG33u7CNMARbKoeEF/BjyQ5JUT7uuIxurmMwm+qgGBDRhoP8zD/KytryF2L/+I/f2oFkV5TifxSNcofKE3EuyLVXmnjTmRff9oxv4DMoGRczzsAjiho2aysqA0IEO1yDPHRV5+WU51Ha1BNFohD7V4hDNX56J2mbhqg+0UUEzXI3f8tcnVN/7+8jeemUnTpCkj99jH+x9Y35E6E5pTOhnKffNXQgbRFMzO02jCEpvEzf3nXvGk+nXlHKa/oARdZmFmF03xnUO/TG/UFse/M8sNzaLUSXRNvcPE9n8ezugFO1ySQxVPETzsme87g29gz4iXMP8GRbtoB5V3gPW5I/8QHJFSyJx7wHup4q47X2NZW4iTRj9d0gi8VmORXs0KYE4ed7oYztRqfiMN2bHCScYRW/TjccgxEerS5QQRfJ4H/p/vbVo2HUklrPc4K6hKKces2IOSoASgaHKLxW1V6WlsFF/Aj+JQNxMecij2YEYPS+b2aYkCak8TWKLLMZFJZKk8jNr9UZG1emKvWUwAPqCl3OrFYR/4cQ+/MW77P0YOEBZosEOQ7r4bzgYo7KNEoGQ8xXut741Oz1aGBZCAl1fr7yGTmv/eedq/KKOu91ChS0FutY/rAa5R8fvYU520fEWT+v49Tg90cW0XX8qY6ynCIS8fL/68nM+Puhf/aGtUY6kGPvBpfQ2sxiTfIUd8bHhUANH62Zru9VKClp6z5iJYYMATQv3ma+il3qbitYD8KfT+oznHs77LEYaI0vvs2oUx4apjHeMjuGv3p51RTyl+APpGQ0KqUZwXQT+xxLcFMz8D0kKSvR4SW5F/RcBpuU8rOYZ+SkR+/OqLvYio1Rrz4ULdqqoWc4Zu3m2zo/NXK7idrDPzqR7GmdmQuST5YfI+c5F69NlpPsQr/JjCckQB194xWwcz8xm6LUDULkAw+npTKxAh+2Khd9NgBEZTCMNxn3XXTii7G5OOitKQujCa81xei1LoH68mhyG0/rMVQXD8q/yolLvhaMNOc11s/hfilVDk+8sKce5jZZBte3TU9+1asUEz0Ff9/PkFq04xjctFmF8SWAKal802i80ZSHcfgdepC1MfME6rfsDR+ewQn/YbgTc7u0WyYBNkJiym6SEQVhUzfTp8wnMq4vx0VjoZN7Ww6Jdi1/qnAaK9AulfVwmzhtbliwIPPhEpG84x3n8pl8BYgx/jwW0FsVoHiGHKxEOm0Uq96nQT4nJ6eIkepuGBBamM9+svRgORyBcvp6OBruWen9QcFyf6QBP+AThPgj7eDpfEh42aZa01xVs5wwMW4UiL0vrdsSb4bgr6FyMfFLHjUjATxTnctIZ/ga/roRrgnHpIjJF2mauP9A/2NqQWQWuYsmcF1BAcKHP0RLLXJbi7em1niQlf4R7ieyfTT6K62idHWUcdYU6FCGUeCgSCAWig8xtUipJNjYiViMQafB5AKL+TkgNXHLt+3XowK17bQim9Pcb2B7yK5Bkul1RD3vzvCWqYDzAg7HDBs3gQYBLhhBsYU0qfyQBaaK7X3Tp16fVhJmOiIxOyHjGHqzqhvhGzcf6uA41uFnJdIgk6WLqiJKVf88ec14/lzzp4rVSVYqIUYBGhujBtk06LJUqSsYF6xBR0uv0Vhmg/Tv6zAJoqK/7DbX/VUijAEnbdq5wuqFQRz7O/mcwzOpKWUVUC8bhYf6dJX3Xc5/8OH2dkF3eB6infwsw2zNnWqNkS96nM7cAE7oFJ0G/UR2YFSVvYN+a639V7NZb9T0HVzgnmiDLu6ZDcggH9kEYMim/eGJ9Ey/9gzfR2gqKlno8khRKpWuXj0RDryttnCjxIczu6kO+adnYDwWzSfuNUD652QYPQWvsG0DLwhepF4gRvZ6aBhOJI8n5KymT3aw35se0gZbKkSpvx2pOhgw4uOShusdpB/ByhoD0I6qSoNKV4qP15MyEeKjbe2bmgkLwTnvIoprcrfxV7u1Mm1ww13hcVKHFcsFRiLt98iNbHvoFt3/CLO4tckLBq2dkZGzvgKpDseKmbzwcD42i2VP2+LP8t/3OV7hoS0qig2u/7mlxgAzM/4AVvYrvI9cgwgQ4FAn3bme6lqxVJKfQr1LAQ56XpXBEp8vokOl5K8zyip/c/+VkOxAR6U2mglvarV3dONPzsj+S+LU9MdvIuSbiQcpCiEOOpb15IhNPMZMJgWtexS6yrtIuOh+NB7ojRvl/DnnDLW/MHSv/ak1iKIK6FDCkRsw6utwTUVUb54W2fwpI63RHyQJl1/fMrVD5oEAbokQrNyp85yIfyas8EDTlKYSVrOdxKGi6fRAnVlpMtP43Hnnc+1RD3VONsyAYnneGfSkd/XyN2zRfzuGlArjhV7X9mfoo9tbkaHkPvaDBpoEHcYUSOPBqM0UeYgFZy7KYy/42Oc5lbU6dx3koquy6FSOhrPZ3mV7heXOEo0eUBsB3RByTjmSADkfRpNxiHQKSRf6G67cWy7PwArVIUN36WQhMwuz+iJ7irSfhpLwhtK9LH72o+25UmkRayBBlkCHBHn+FoeE5SJKtcblW2bhzGwe+Plnuscg44EGV/mZ6cccd/xQ1DpAxX84Wp0U30JoUlJSrHkiptY2kIWn60SSSRL8UUx9QYk7XDNU/XBAm0S+H6np2guosYtS8QAMPlx9gBUuL+tvYhdEkWudCGTyh99S9FbJPmNQSTAze5iw23vFiipKq1lzSVj9gw4Ozu2nYKEp5jv3sFU3Av7hQ/RzP+RuZvA2QmYRY/MvbC21Mra4sb5ZAep2QpKWGVqv6LwxOQ3HddWcx4oM0drPZaOdS3xC6Pc3fTuKwpnwmAyVZ8ad5OiP/reQxP7acB+M0xVmTk/d5r2Ag4iYzMj2gXInnB360g6LG5jagiylI/Sfp9byEpaEUvr8NYG7J37jqlpDp0ujA8ZXNHqQ7dddU1aAdgB6+q22Z/JA5Z8kLCCGsk3BZrqgJoTqprpcm3qstrVu21pJ0PnCyR34Wj3Myk0hFscFIHAY9+63fe/VoxkU6jDRgyYJvMLGNUqmQoS+eb+CXoUG0Mb32oKfP6YAG/EabUzX4EA4I2W4Cm0Hv1z4p1dUdLOgM36BcTojA5fjIt1IaFhQXE+1k27ubjwWiBn6ViDu14XumSqSy1X7zWAeGBDSFsQgG6R7JC64Px0905p3bO09Ch25nfjYlYRrsIGdOb9ASmdxZ6JnEGDG+y+EiCBPrXSb5mcJi1TvMC48wwbLjQczJYKI3RnPouAVkpBkjlbqm36Kn9jHJUZQs2441aq/lSveQ0DEJboOReh2MY9fDR0V+D7NYxwJwS/FRYVRSJ+tIxHMe1R4oiNd8V+Ce3k46XdeyAOacG8fJ/vYpVYnFqQvOxZXGdKYyw5Yet0mEHWn31UazllflKpATyJrRol7LP0wm/4WF+nHnrAiaYNjq7PYCVXeBHdgvF9QULuWIED9eQmltFU8vTf4JNCkpfj0y4hBFTXU0vXqIipgKYdnWqYiCSSHU6Jyd/NzCQ51SgazYFDuKl1Y/AKr7svEzt8kA97kmFTbp75mYPh/70yVrhlJJbbj38nNIgBiqx/Yum6LZOsTVAXgyFFVenElaT7zdgljRpngA96gIXML+Kod9m/OEvVsAn0oX4e1ElKi4lX3CCgIXJ2jfyxhR/vdt+c8b1pwjwXSN7cn7hFom7J+kSvSa16XGvDpw5m3e+4JKg3OAf3Kh1PUTxvP0hVFw7Wt/oHsHfDPOvbrmAhzf0AkIOxT8XE+rQN0kYoe99uQClzXQGNg1Q/+imxM7zLuJH+RwyH9wJqxdUPDV7rUR2hCOlF/lcjNQXSkkbVM48RVMhPyjXMznJ+54RMwIlIi1qGYNST7lh4mEj2Ab1Fe4eFtKDP/P6/KecgKnzx3EBXGYa3EPv5l6vmvL7JHvq0EUfpePZhYgY47uRxhl5u0NKSwGHyPhAIud3fQoGVwlKdwvcBzRm+tN7orjvVTr5o7dOsa/vN3aCWBFiYzSGrIpIZ9qLJEhIXmT4R++VaouFuxDk8/ouINxu/UbcoCXQe3HwSwoy+bYu+lCbUb/t2CSwjZlI5mH7Z6Pdn/68e6d6OMI04ygKI6xA4BvKlgWqqMTKoJuRjgqb32xm6whdjSm7/MGILbbSPdFiglyiExvGi2TQYoAAAAAA"
                        alt="product image"
                        width={500}
                        height={500}
                        className="w-full h-[70%] p-5 object-cover object-center"
                    />
                </Grid>
                <Grid item xs={4}>
                    <Box className="py-5 pe-5">
                        <Typography variant="body1">
                            Tác giả:{' '}
                            <Link href="" className="text-cyan-500">
                                Erant Katz
                            </Link>
                        </Typography>
                        <Typography variant="h5">
                            Trí Tuệ Do Thái (Tái Bản 2018)
                        </Typography>
                        <Badge
                            badgeContent="đ"
                            className="text-price font-bold text-xl my-5"
                        >
                            131.356
                        </Badge>
                        <Box className="my-4">
                            <Typography variant="body1" className="mb-1">
                                Số lượng
                            </Typography>
                            <Box className="flex items-center justify-start">
                                <NumberOfProducts />
                            </Box>
                        </Box>
                        <Box className="flex items-center">
                            <Button
                                variant="contained"
                                className="bg-submit-buy hover:bg-submit-buy-hv capitalize flex-1"
                            >
                                Chọn mua
                            </Button>
                            <Button
                                variant="outlined"
                                startIcon={<SendIcon />}
                                className="ms-3 capitalize flex-1"
                            >
                                Chat
                            </Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Shop />
                </Grid>
            </Grid>
        </Box>
    )
}
