import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { MountainsSun, MountainsSunPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/MountainsSun",
  component: MountainsSun,
} as ComponentMeta<typeof MountainsSun>;

const Template: ComponentStory<typeof MountainsSun> = (
  args: MountainsSunPropsI
) => (
  <x.div display="flex" gap="20px">
    <MountainsSun {...args} />
    <MountainsSun {...args} fill="red.500" />
    <MountainsSun {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
