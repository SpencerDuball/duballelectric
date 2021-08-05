import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { SpaceKey, SpaceKeyPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/SpaceKey",
  component: SpaceKey,
} as ComponentMeta<typeof SpaceKey>;

const Template: ComponentStory<typeof SpaceKey> = (args: SpaceKeyPropsI) => (
  <x.div display="flex" gap="20px">
    <SpaceKey {...args} />
    <SpaceKey {...args} fill="red.500" />
    <SpaceKey {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
