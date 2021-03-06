import eases from 'eases';
import { Particle } from "./particle";
import { ElementModifier } from "./interfaces/element";
import { GravitySource } from './gravitySource';
import { ScreenSize } from './screenSize';
import { distance, rippleLength } from './utilities';

export type ParticleConfig = {
    minOpacity?: number;
    maxOpacity?: number;
    easing?: string;
}
// Creates a ElementModifier function which adjusts
// the particle opacity based on its distance to
// the GravitySource (closer == more opaque)
export const createParticleToGravityModifier = (params: {
    gravitySource: GravitySource,
    screenSize: ScreenSize,
    particleConfig: ParticleConfig,
}): ElementModifier => (
    particle: Particle,
    time: number
) => {
        const particleConfig = {
            easing: 'cubicIn',
            ...params.particleConfig
        };
        const { gravitySource, screenSize } = params;
        const distanceToGravity = distance(
            particle,
            gravitySource.center,
        );
        const highestDistance = rippleLength(
            screenSize,
            gravitySource.center,
        );
        const distanceNormalized = 
            (highestDistance - distanceToGravity) / highestDistance;
        const targetOpacity = eases[particleConfig.easing](distanceNormalized) * particle.maxOpacity;

        particle.opacity = targetOpacity;
    };
