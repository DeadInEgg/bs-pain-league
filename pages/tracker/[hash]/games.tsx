import { useRouter } from 'next/router'
import { useFetch } from '../../../hooks/useFetch'
import OnlineLayout from '../../../components/organisms/OnlineLayout'
import Map from '../../../components/molecules/Map'
import ImageContentBox from '../../../components/atoms/ImageContentBox'
import ContainerBox from '../../../components/atoms/ContainerBox'
import ContentBox from '../../../components/atoms/ContentBox'
import { useState } from 'react'
import Image from 'next/image'
import iconClose from '../../../public/close.png'
import iconSearch from '../../../public/icon_search.png'
import Input from '../../../components/atoms/Input'

interface Tracker {
  name: string
  games: Game[]
}

interface Game {
  name: string
}

interface Brawler {
  name: string
  image: string
}

interface Mode {
  name: string
  image: string
}

interface Map {
  name: string
  image: string
  mode: {
    name: string
    type: {
      name: string
    }
  }
}

export default function Games() {
  const router = useRouter()
  const { hash } = router.query

  const [isOpen, setIsOpen] = useState(false)
  const [focus, setFocus] = useState('modes')
  const [selectedMode, setSelectedMode] = useState<Mode>()
  const [selectedMap, setSelectedMap] = useState<Map>()
  const [selectedBrawler, setSelectedBrawler] = useState<Brawler>()

  const { data: tracker, isLoading: isTrackerLoading } = useFetch<Tracker>({
    url: `trackers/${hash}`,
  })

  const { data: brawlers, isLoading: isBrawlersLoading } = useFetch<Brawler[]>({
    url: 'brawlers',
  })

  const { data: maps, isLoading: isMapsLoading } = useFetch<Map[]>({
    url: 'maps',
  })

  const { data: modes, isLoading: isModesLoading } = useFetch<Mode[]>({
    url: 'modes',
  })

  const handleSelectMode = (mode: Mode) => {
    setIsOpen(!isOpen)
    setFocus('maps')
    setSelectedMode(mode)
  }

  const handleSelectMap = (map: Map) => {
    setIsOpen(!isOpen)
    setFocus('brawlers')
    setSelectedMap(map)
  }

  const handleSelectBrawler = (brawler: Brawler) => {
    setIsOpen(!isOpen)
    setSelectedBrawler(brawler)
  }

  if (
    !tracker ||
    isTrackerLoading ||
    !brawlers ||
    isBrawlersLoading ||
    !maps ||
    isMapsLoading ||
    !modes ||
    isModesLoading
  ) {
    return <>Loading...</>
  }

  return (
    <OnlineLayout>
      <div className="relative w-full h-full">
        <div className="flex flex-row flex-wrap gap-x-2">
          <ContainerBox>
            <ContentBox onPlusClick={() => setIsOpen(!isOpen)}>
              {selectedMode && (
                <ImageContentBox
                  image={selectedMode.image}
                  name={selectedMode.name}
                />
              )}
            </ContentBox>
            <ContentBox
              disabled={!selectedMode}
              onPlusClick={() => setIsOpen(!isOpen)}
            >
              {selectedMap && (
                <ImageContentBox
                  image={selectedMap.image}
                  name={selectedMap.name}
                />
              )}
            </ContentBox>
          </ContainerBox>

          <ContainerBox>
            <ContentBox
              disabled={!selectedMap}
              onPlusClick={() => setIsOpen(!isOpen)}
            >
              {selectedBrawler && (
                <ImageContentBox
                  image={selectedBrawler.image}
                  name={selectedBrawler.name}
                />
              )}
            </ContentBox>
            <ContentBox
              disabled={!selectedMap}
              onPlusClick={() => setIsOpen(!isOpen)}
            />
            <ContentBox
              disabled={!selectedMap}
              onPlusClick={() => setIsOpen(!isOpen)}
            />
            <ContentBox
              disabled={!selectedMap}
              onPlusClick={() => setIsOpen(!isOpen)}
            />
            <ContentBox
              disabled={!selectedMap}
              onPlusClick={() => setIsOpen(!isOpen)}
            />
          </ContainerBox>
        </div>
        <div>
          <ul>
            {tracker.games.map((game) => (
              <li key={game.name}>{game.name}</li>
            ))}
          </ul>
        </div>
        {isOpen && (
          <div className="flex flex-col absolute border-black border-2 mt-4 rounded-md">
            <div className="flex flex-row justify-between mb-2  p-4">
              <div className="flex flex-row gap-x-2">
                <button className="w-10 hover:brightness-125 z-10">
                  <Image src={iconSearch} alt="search" />
                </button>
                <Input id="search" name="search" />
              </div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-10 hover:brightness-125 z-10"
              >
                <Image src={iconClose} alt="close" />
              </button>
            </div>
            {focus === 'modes' && (
              <ul className="grid grid-cols-4 sm:grid-cols-8 md:grid-cols-10">
                {modes.map((mode) => (
                  <li
                    key={mode.name}
                    className="hover:brightness-125"
                    onClick={() => handleSelectMode(mode)}
                  >
                    <ImageContentBox image={mode.image} name={mode.name} />
                  </li>
                ))}
              </ul>
            )}
            {focus === 'maps' && (
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                {maps.map((map) => (
                  <li key={map.name} onClick={() => handleSelectMap(map)}>
                    <Map
                      image={map.image}
                      name={map.name}
                      mode={map.mode.name}
                    />
                  </li>
                ))}
              </ul>
            )}
            {focus === 'brawlers' && (
              <ul className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10">
                {brawlers.map((brawler) => (
                  <li
                    key={brawler.name}
                    className="hover:brightness-125"
                    onClick={() => handleSelectBrawler(brawler)}
                  >
                    <ImageContentBox
                      image={brawler.image}
                      name={brawler.name}
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </OnlineLayout>
  )
}
