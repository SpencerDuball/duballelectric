import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Pathfinder, PathfinderPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Pathfinder",
  component: Pathfinder,
} as ComponentMeta<typeof Pathfinder>;

const Template: ComponentStory<typeof Pathfinder> = (
  args: PathfinderPropsI
) => (
  <x.div display="flex" gap="20px">
    <Pathfinder {...args} />
    <Pathfinder {...args} fill="red.500" />
    <Pathfinder {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
