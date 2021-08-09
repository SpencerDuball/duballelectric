import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ServerAlt, ServerAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ServerAlt",
  component: ServerAlt,
} as ComponentMeta<typeof ServerAlt>;

const Template: ComponentStory<typeof ServerAlt> = (args: ServerAltPropsI) => (
  <x.div display="flex" gap="20px">
    <ServerAlt {...args} />
    <ServerAlt {...args} fill="red.500" />
    <ServerAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
